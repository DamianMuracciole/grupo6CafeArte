const fs = require("fs");
const path = require("path")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/index');
const User = require("../database/models/User");
const sequelize = db.sequelize
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
                    res.cookie ('recordame',req.body.email,{maxAge: 1 * 60 * 1000 }) //cookie dura 1 mminuto
                }
                return res.redirect("perfil")
            } else {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: "Debes ingresar los datos correctamente"
                        }
                    }
                })
            }
        }}).catch(err => {
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
        
        if (resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {          
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
            .catch(err => {
                res.send(err)
            })
        }
    }





    
;

module.exports = userController;