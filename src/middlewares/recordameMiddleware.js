//NOTA (2022-07-25) de Damian Muracciole
//Este archivo se trató de limpiar comentarios de código ya no utilizable 
//por cuestiones de legibilidad
//para verlo completo referirise a la rama feature-feature-RemenberMe



const db = require('../database/models/index');
const User = require("../database/models/User");
const sequelize = db.sequelize
const Users = db.User;


async function recordameMiddleware (req, res, next){
    
    if (req.cookies.userEmail != undefined && req.session.userToLogin == undefined ){

       const user = await Users.findOne({
            where: {
                email: req.cookies.userEmail
            }            
        })
     
            req.session.userLogged = user;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        
    }
   
    next();
}

module.exports = recordameMiddleware;