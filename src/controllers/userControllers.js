const fs = require("fs");
const path = require("path")
const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const db = require('../database/models/index');
const User = require("../database/models/User");
const sequelize = db.sequelize
const Users = db.User;
const Rols = db.Rol;
//const { Op } = require("sequelize");

// Me traigo el json que tiene la data de users y lo parseo
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// const { localsName } = require('ejs');
// const { send } = require("process");

 

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
                     // console.log(req.session)
                    if (req.body.recordame != undefined) {
                        res.cookie('recordame', req.body.email, {
                            maxAge: 60000 * 10
                        })
                    }
                    req.session.userLogged = userToLogin.dataValues
                    // console.log(req.session)
                    // res.redirect("/")
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
          //console.log("userLogged en profile", req.session);
         // console.log("userLogged en profile2", res.locals);

        // console.log (req.session.userLogged);
         
        // let userLogged = Users.findOne({
        //     where: {
        //         email: req.session.userLogged.email
        //     }
        // }).then((respuesta) => res.render("users/profile", {
        //         respuesta
        //     })

        // )
        res.render("users/profile", {user:req.session.userLogged})



    },
    logout: (req, res) => {
        res.clearCookie('recordame')
        req.session.destroy();
        return res.redirect("/")
    },
    register: (req, res) => {
        //res.send("Estoy aca")
        res.render('users/register')
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        //console.log("🚀 ~ file: userControllers.js ~ line 110 ~ resultValidation", resultValidation)

        if (resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            //console.log("🚀 ~ file: userControllers.js ~ line 140 ~ body", req.body)

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
                res.render("users/edit", {user:user, rol:rol})
            })

    },
    actualizar: (req, res) => {
        //console.log("VIENE EL BODYY????", req.body)
        //console.log("Y FIRST NAME??",req.body.first_name);
        //console.log("Y EL FILE",req.file.filename);
        //console.log("Y LA IMAGEN",req.session.userLogged.image);
        //const id = req.params.id       
        //console.log("**** req.file *****", req.file)
        //console.log("**** req.file.filename **** ", req.file.filename)
        let finalImage;
        if (!req.file) {            
            finalImage = req.session.userLogged.image            
        } else {
            finalImage = req.file.filename
        }
        
        Users.update({
            ...req.body,
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
    },

};

module.exports = userController;