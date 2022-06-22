// const fs = require("fs");
// const path = require ("path")
//const User = require('../models/User')
const bcryptjs = require('bcryptjs');
let db = require('../database/models/index'); //requerimos sequelize dentro del controlador
const Op = db.Sequelize.Op;

// Me traigo el json que tiene la data de users y lo parseo
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//const { localsName } = require('ejs');
const { validationResult } = require('express-validator');
//const { send } = require("process");

const userController = { 
    login: (req, res) => {        
        res.render('users/login')
    }, 
    loginProcess: (req, res)=>{
        let userToLogin = User.findByField("correo", req.body.correo)
        if(userToLogin){
            let isOkcontrasena = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)
            if(isOkcontrasena){
                // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                delete userToLogin.contrasena;
                req.session.userLogged = userToLogin
                return res.redirect("perfil")
            }
            return res.render('users/login', {
                errors: {
                    correo: {
                        msg: "Debes ingresar los datos correctamente"
                    }
                }
            })
        }
        return res.render('users/login', {
            errors: {
                correo: {
                    msg: "Debes ingresar los datos correctamente"
                }
            }
        })
    },
    // ruta de perfil: falta la vista!!!
    profile: (req, res)=> {
        return res.render("users/profile", {
            // le pasamos la variable a la vista, debo usarlas
            user: req.session.userLogged
        })
    },
    logout: (req, res)=>{
        req.session.destroy();
        return res.redirect("/")
    },
    register: (req, res) => {
        //res.send("Estoy aca")
        res.render('users/register')
    },    
    processRegister: (req, res) => {        
        const resultValidation = validationResult(req)        
        if(resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body            
            });   
        }

        let userInDB = User.findByField("correo", req.body.correo);
        if(userInDB){
           return  res.render('users/register', {
                errors: {
                    correo: {
                        msg: "El correo ya pertenece a un usuario"
                    }
                },
                oldData: req.body            
            }); 
        }

            //Esto es con modelo
            let userToCreate = {
                ...req.body,
                contrasena: bcryptjs.hashSync(req.body.contrasena, 10), 
                dobleContrasena: bcryptjs.hashSync(req.body.dobleContrasena, 10),
                imagen: req.file.filename
            }
            let userCreated = User.create(userToCreate);
            res.redirect('/usuarios/login')
        
    }
};

module.exports = userController;