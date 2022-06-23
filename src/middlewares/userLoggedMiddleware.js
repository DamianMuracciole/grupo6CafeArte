// modificar la barra de navegacion dependiendo si el usuario esta logueado
// va a ser un middle de aplicación, debo llamarlo en app

function userLoggedMiddleware(req, res, next) {
    // si hay alguien en session mostar una parte de la barra o no
    // pasandola a la aplicacion la hago disponible desde cualquier lado.
    res.locals.isLogged = false;
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }
    next();
};

module.exports = userLoggedMiddleware