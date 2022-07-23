// Para que no aparezca el error cuando se quiere acceder a la ruta /profile, va a ser lo contrario al guestmiddleware
// si no tengo a nadie en session, que vaya a login en lugar del profile, es un middleware de ruta del profile
function authMiddleware (req, res, next){
    if(!req.session.userLogged) {
        return res.redirect ("/usuarios/login")
    }
    next();    
}

module.exports = authMiddleware