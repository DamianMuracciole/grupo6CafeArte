// construimos el middleware y lo pasamos a la ruta de profile para que cuando el usuario este logueado no le apareza la posibilidad de acceder a register y a login
// si tengo a alguien en sesion, que lo mande al perfil, sino, que siga a register o login.
function guestMiddleware (req, res, next){
    if(req.session.userLogged && res.locals.userLogged.rols_id !== 2) {
        return res.redirect ("/usuarios/perfil")
    } 
    next();
}
module.exports = guestMiddleware