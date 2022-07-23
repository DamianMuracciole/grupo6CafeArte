// modificar la barra de navegacion dependiendo si el usuario esta logueado
// va a ser un middle de aplicación, debo llamarlo en app

const db = require('../database/models');
//const User = require("../database/models/User");
const Users = db.User;



function userLoggedMiddleware(req, res, next) {
    // si hay alguien en session mostar una parte de la barra o no
    // pasandola a la aplicacion la hago disponible desde cualquier lado.
    res.locals.isLogged = false; //res.locals la puedo compartir en todas las vistas, indistintamente del controlador
    
    let emailInCookie = req.cookies.userEmail;
    console.log("**** emailInCookie *****", emailInCookie)

    let userFromCookie;

    if (emailInCookie) {
        userFromCookie = Users.findOne({
            where: {
                email: emailInCookie
            }
        })
        .then((result) => {return result})
        .catch(err => res.send(err))    
    }

    console.log("USER DE LA GALLETA!!!*****",userFromCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();

}
            


module.exports = userLoggedMiddleware