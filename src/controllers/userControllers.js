const fs = require("fs");
const path = require ("path")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')
const Users = db.User;
const { Op } = require("sequelize");

//hago el requerimiento de la base de datos
// const DB = require('../database/models/index');
// const user = DB.User
// const sequelize = db.sequelize;
// const Op = db.Sequelize.Op;


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
        let userToLogin = {}
        Users.findOne({
            where: {
                email: req.body.email
            }            
        }).then((resultado) => {        
        userToLogin = resultado;        
        if(userToLogin){
            let isOkcontrasena = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkcontrasena){
                // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                delete userToLogin.contrasena;
                req.session.userLogged = userToLogin

                if ( req.body.recordame != undefined){
                    res.cookie ('recordame',req.body.email,{maxAge: 10 * 60 * 1000 }) //cookie dura 10 mminutos
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
        return res.render("users/profile", { user : req.session.userLogged }) // le pasamos la variable a la vista  
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
    }
};

module.exports = userController;