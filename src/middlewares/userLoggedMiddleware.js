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
    //console.log("**** emailInCookie *****", emailInCookie)

    let userFromCookie;
    let allUsers;

    if (emailInCookie) {
        userFromCookie = Users.findOne({
            where: {
                email: emailInCookie
            }
        })
        .then((userFromCookie) => {
            //return result
            //console.log("*** userFromCookie DE RESULT!! ****", userFromCookie)
            if (userFromCookie) {
                req.session.userLogged = userFromCookie;
                //console.log("🚀 ~ file: userLoggedMiddleware.js ~ line 32 ~ .then ~  req.session.userLogged",  req.session.userLogged)
            }
            
            
            
        })
            
        .catch(err => res.send(err))        
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        //console.log("🚀 ~ file: userLoggedMiddleware.js ~ line 38 ~ .then ~ req.session.userLogged;", req.session.userLogged)
        //console.log("🚀 ~ file: userLoggedMiddleware.js ~ line 38 ~ .then ~ res.locals.userLogged", res.locals.userLogged)
    }

    //console.log("USER DE LA GALLETA!!!*****",userFromCookie);
    //console.log("TODOS LOS USUARIOS!!!*****",allUsers);



    

    next();

}
            


module.exports = userLoggedMiddleware