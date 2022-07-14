const fs = require("fs");
const path = require ("path")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')
const Users = db.User;
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
    findByField: function (field, text) {
        let allUsers = Users.findAll()
                    .then(listadoUsers => {
                        console.log(listadoUsers);
                    })
                let userFound = allUsers.find(oneUser => oneUser[field] === text); 
                return userFound;
    },
    loginProcess: (req, res)=>{
        //bring all uses
        // Users.findAll()
        //     .then(listadoUsers => {
        //         console.log(listadoUsers);
        //     })
        // console.log("Usuarios*******", Users);

        // let userToLogin = Users.findByField("email", req.body.email)
        // console.log("🚀 ~ file: userControllers.js ~ line 29 ~ userToLogin", userToLogin)
        // console.log("imprimir Body", req.body);
        
        let userToLogin = {}
        Users.findOne({
            where: {
                email: req.body.email
            }            
        }).then((resultado) => {
        //console.log("🚀 ~ file: userControllers.js ~ line 38 ~ resultado", resultado)
        //console.log("resultado email", resultado.email)
        userToLogin = resultado
        
        //console.log("imprimir usertologin", userToLogin);
        if(userToLogin){
            let isOkcontrasena = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkcontrasena){
                // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                delete userToLogin.contrasena;
                req.session.userLogged = userToLogin
                //console.log("req.session.userLogged", req.session.userLogged)
                //console.log("Correo del usuario logueado: ", userToLogin.email);                
                
                if ( req.body.recordame != undefined){
                    res.cookie ('recordame',req.body.correo,{maxAge: 60000 * 10})                    
                }

                return res.redirect("perfil")
            } else {
                return res.render('users/login', {
                    errors: {
                        correo: {
                            msg: "Debes ingresar los datos correctamente"
                        }
                    }
                })
            }
        } else {
            return res.render('users/login', {
                errors: {
                    correo: {
                        msg: "Debes ingresar los datos correctamente"
                    }
                }
            })
        }


        }).catch(err => {
            res.send(err)
        })      
       
        
    },
    profile: (req, res)=> {
        //console.log("userLogged en profile", req.session.userLogged);
        return res.render("users/profile", {
            // le pasamos la variable a la vista
            user: req.session.userLogged
        })
        
        
    },
    logout: (req, res)=>{
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
        console.log("🚀 ~ file: userControllers.js ~ line 110 ~ resultValidation", resultValidation)
       
        if(resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body            
            });   
        } else {
            console.log("🚀 ~ file: userControllers.js ~ line 140 ~ body", req.body)
        
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

        // para que no pueda haber 2o+ users con el mismo mail.
        // let userInDB = User.findByField("correo", req.body.correo);
        // if(userInDB){
        //    return  res.render('users/register', {
        //         errors: {
        //             correo: {
        //                 msg: "El correo ya pertenece a un usuario"
        //             }
        //         },
        //         oldData: req.body            
        //     }); 
        // }

            //Esto es con modelo
            // let userToCreate = {
            //     ...req.body,
            //     contrasena: bcryptjs.hashSync(req.body.contrasena, 10), //como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
            //     dobleContrasena: bcryptjs.hashSync(req.body.dobleContrasena, 10),
            //     imagen: req.file.filename
            // }
            
        
       
    
            
        
    }
};

module.exports = userController;