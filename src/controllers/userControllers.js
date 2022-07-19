const fs = require("fs");
const path = require ("path")
const bcryptjs = require('bcryptjs');
<<<<<<< HEAD
const { validationResult } = require('express-validator');
const db = require('../database/models')
const Users = db.User;
//const { Op } = require("sequelize");
=======

//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const user = db.User
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366

// Me traigo el json que tiene la data de users y lo parseo
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// const { localsName } = require('ejs');
// const { send } = require("process");

const userController = {
    login: (req, res) => {
<<<<<<< HEAD
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
        userToLogin = resultado        
        if(userToLogin){
            let isOkcontrasena = bcryptjs.compareSync(req.body.password, userToLogin.password)
=======
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
>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
            if(isOkcontrasena){
                // si esta todo bien, quiero guardar el usuario en sesion, borrando la contraseña
                delete userToLogin.contrasena;
                req.session.userLogged = userToLogin
<<<<<<< HEAD
                
                if ( req.body.recordame != undefined){
<<<<<<< HEAD
                    res.cookie ('recordame',req.body.correo,{maxAge: 600000 })
                    
=======
                    res.cookie ('recordame',req.body.correo,{maxAge: 60000 * 10})                    
>>>>>>> 18bb0fa01e79e6b09d6affdc23e9551a8fd62b53
                }

=======

                if ( req.body.recordame != undefined){
                    res.cookie ('recordame',req.body.correo,{maxAge: 60000 * 10})
                }
>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
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
<<<<<<< HEAD
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
       
        
=======

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
>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
    },
    profile: (req, res)=> {
        //console.log("userLogged en profile", req.session.userLogged);
        return res.render("users/profile", {
<<<<<<< HEAD
            // le pasamos la variable a la vista
            user: req.session.userLogged
=======

            user: req.session.userLogged    // le pasamos la variable a la vista, debo usarlas
>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
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
<<<<<<< HEAD
=======
        //res.send("Ok, viniste por post")
        //res.send(req.body) // cuando pongo el enctype="multipart/form-data" ya no recibo esto
        // res.send({
        //     body: req.body,
        //     file: req.file
        // })
>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
        const resultValidation = validationResult(req)
        console.log("🚀 ~ file: userControllers.js ~ line 110 ~ resultValidation", resultValidation)
       
        if(resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
<<<<<<< HEAD
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

        
=======
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

>>>>>>> dc1d9d83510ec6b976e0aa524684e07a00aa8366
    }
};

module.exports = userController;