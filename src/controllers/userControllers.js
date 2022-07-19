const fs = require("fs");
const path = require ("path")
const User = require('../models/User')
const bcryptjs = require('bcryptjs');

//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const user = db.User
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


// Me traigo el json que tiene la data de users y lo parseo
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { localsName } = require('ejs');
const { validationResult } = require('express-validator');
const { send } = require("process");

const userController = {
    login: (req, res) => {
        res.render('users/login')
    },
    loginProcess: (req, res)=>{
        // código nuevo para consultar a la DB en vez del json 
        //obtengo lo escrito en la vista
        const userMail = req.body.correo;
        const password = req.body.contrasena;
        //user.findAll()
        user.findOne({ where: { email: userMail } })
        .then(userToLogin =>{
            let isOkcontrasena = bcryptjs.compareSync(password, userToLogin.password)
            if(isOkcontrasena){
                // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                delete userToLogin.contrasena;
                req.session.userLogged = userToLogin

                if ( req.body.recordame != undefined){
                    res.cookie ('recordame',req.body.correo,{maxAge: 60000 * 10})
                }
                return res.redirect("perfil")
            }

        })
        // código anterior!!!!!!!!!!!!!!!
        // let userToLogin = User.findByField("correo", req.body.correo)
        // if(userToLogin){
        //     let isOkcontrasena = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)
        //     if(isOkcontrasena){
        //         // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
        //         delete userToLogin.contrasena;
        //         req.session.userLogged = userToLogin
        //         console.log(req.session.userLogged)
        //         // console.log(userToLogin);


        //         if ( req.body.recordame != undefined){
        //             res.cookie ('recordame',req.body.correo,{maxAge: 60000 * 10})

        //         }


        //         return res.redirect("perfil")
        //     }
        //     return res.render('users/login', {
        //         errors: {
        //             correo: {
        //                 msg: "Debes ingresar los datos correctamente"
        //             }
        //         }
        //     })
        // }
        // return res.render('users/login', {
        //     errors: {
        //         correo: {
        //             msg: "Debes ingresar los datos correctamente"
        //         }
        //     }
        // })
    },
    profile: (req, res)=> {
        return res.render("users/profile", {

            user: req.session.userLogged    // le pasamos la variable a la vista, debo usarlas
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
        //res.send("Ok, viniste por post")
        //res.send(req.body) // cuando pongo el enctype="multipart/form-data" ya no recibo esto
        // res.send({
        //     body: req.body,
        //     file: req.file
        // })
        const resultValidation = validationResult(req)
        //res.send(resultValidation)
        //res.send(resultValidation.mapped())
        if(resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        // para que no pueda haber 2o+ users con el mismo mail.
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
                contrasena: bcryptjs.hashSync(req.body.contrasena, 10), //como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
                dobleContrasena: bcryptjs.hashSync(req.body.dobleContrasena, 10),
                imagen: req.file.filename
            }
            let userCreated = User.create(userToCreate);
            res.redirect('/usuarios/login')

            // Todo esto es sin modelo
            /*
            let newUser={
                id: users[users.length -1].id + 1,
                    ...req.body,
                    imagen : req.file.filename
                }

                users.push(newUser)
                fs.writeFileSync(usersFilePath, JSON.stringify(users));
                res.redirect('/usuarios/login')
                //res.send("No hubo errores y se pasaron las validaciones!")
            */

    }
};

module.exports = userController;