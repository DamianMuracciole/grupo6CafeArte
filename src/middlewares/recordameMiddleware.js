//NOTA (2022-07-25) de Damian Muracciole
//Este archivo se trató de limpiar comentarios de código ya no utilizable 
//por cuestiones de legibilidad
//para verlo completo referirise a la rama feature-feature-RemenberMe

const db = require('../database/models')
const Users = db.User;


function recordameMiddleware (req, res, next){
    
    if (req.cookies.recordame != undefined && req.session.userToLogin == undefined ){

        Users.findOne({
            where: {
                email: req.cookies.recordame
            }            
        }).then((user) => {
            req.session.userLogged = user;
        })
    }
    next();
}

module.exports = recordameMiddleware;