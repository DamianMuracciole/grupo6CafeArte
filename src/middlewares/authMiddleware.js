// middle para que no aparezca el error cuando se quiere acceder a la ruta /profile, va a ser lo contrario al guestmiddleware
function authMiddleware (req, res, next){
    if(!req.session.userLogged) {
        return res.redirect ("/usuarios/login")
    }
    next();
}
module.exports = authMiddleware