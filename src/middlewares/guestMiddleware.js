// construimos el middleware y lo pasamos a la ruta de profile para que cuando el usuario este logueado no le apareza la posibilidad de acceder a register y a login
// voy a verificar si hay alguien en sesion para que si no hay, se redirija al login
function guestMiddleware (req, res, next){
    if(req.session.userLogged) {
        return res.redirect ("/usuarios/profile")
    }
    next();
}
module.exports = guestMiddleware