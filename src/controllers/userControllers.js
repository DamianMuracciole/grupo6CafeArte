const fs = require("fs");
const path = require("path")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/index');
const User = require("../database/models/User");
const sequelize = db.sequelize
const Users = db.User;
const Rols = db.Rol;
//const { Op } = require("sequelize");

const userController = {

    login: (req, res) => {
        res.render("users/login")

    },
    loginProcess: (req, res) => {
        // let userToLogin = {}
        Users.findOne({
            where: {
                email: req.body.email
            }
        }).then((resultado) => {
            userToLogin = resultado
            if (userToLogin) {
                let isOkcontrasena = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (isOkcontrasena) {
                    // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin
                    // en sesion tengo una propiedad llamada userLogged, que tiene toda la info de userToLogin
                    if (req.body.recordame) {
                        res.cookie('userEmail', req.body.email, {
                            maxAge: (1000 * 60) * 120 //ciento veinte minutos, un minuto por 120, 2 horas
                        })
                    }

                    return res.redirect("/usuarios/perfil")
                } else {
                    return res.render('users/login', {
                        errors: {
                            user: {
                                msg: "Debes ingresar los datos correctamente"
                            }
                        }
                    })
                }
            } else {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: "Debes ingresar los datos correctamente"
                        }
                    }
                })
            }
        }).catch(err => {
            res.send(err)
        })
    },
    profile: (req, res) => {
        res.render("users/profile", {
            user:req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect("/")
    },
    register: (req, res) => {
        res.render('users/register')
    },
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req)

        await Users.findOne({
            where: { email: req.body.email }
        })
        .then((resultado) => {
            userInDB = resultado
        })
        .catch(err => res.send(err))

        if (resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else if(userInDB) {
            return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
        } else {
            console.log(req.body);
            Users.create({
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10), //como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
                    confirm_password: bcryptjs.hashSync(req.body.confirm_password, 10),
                    image: req.file.filename,
                    status: "A"
                })
                .then(() => res.redirect('/usuarios/login'))
                .catch(err => {
                    res.send(err)
                })
        }
    },

    edit: function(req,res){
        const id = req.params.id
        // Users.findByPk(id,{
        //     include: [{association: "rols"}]
        // })
        // .then( user => res.render("users/edit", {user}))
        let pedidoUsuario = Users.findByPk(id);
        let pedidoRoles = Rols.findAll();

        Promise.all([pedidoUsuario, pedidoRoles])
            .then(([user, rol]) => {
                //console.log(user);
                res.render("users/edit", {user:user, rol:rol})
            })
            .catch(err => {
                res.send(err)
            })

    },
    actualizar: async (req, res) => {
        // Levanto validaciones
        const resultValidation = validationResult(req)
        const user =  req.body;
        user.id = req.params.id;
        
        //passwords
        let newPassword;
        let confirmNewPassword;

        //Busco email en la Bb
        await Users.findOne({
            where: { email: req.body.email }
        })
        .then((resultado) => {
            userInDB = resultado
        })
        .catch(err => res.send(err))

        let error = resultValidation.mapped();

        //condicion para no evaluar las password
        if (req.body.changePassword == undefined){
            if(error.password) delete error.password;
            if(error.newPassword) delete error.newPassword;
            if(error.newRepassword) delete error.newRepassword;
            newPassword = userInDB.password
            confirmNewPassword = userInDB.confirm_password
        }else{
            newPassword = bcryptjs.hashSync(req.body.newPassword, 10) //como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
            confirmNewPassword = bcryptjs.hashSync(req.body.newRepassword, 10)
        }

        

        //referido a la imagen
        let finalImage;
        if (req.file && req.file.filename){
            finalImage = req.file.filename;
            delete error.image;
        }else{
            finalImage = userInDB.image;
            delete error.image;
        }
        
        Users.update({
            ...req.body,
            password: newPassword,//como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
            confirm_password: confirmNewPassword,
            image: finalImage,
            rols_id: req.body.rol
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/usuarios/detalle/' + req.params.id))
        .catch(err => res.render(err))
    },

    detalle: function(req,res){
        const id = req.params.id
        Users.findByPk(id, {
            include: [{association: "rols"}]
        })
        .then( user => res.render("users/details", {user}))
        .catch(err => {
            res.send(err)
        })
    },

};

module.exports = userController;