function adminMiddleware (req, res, next){
    if(req.session.userLogged && res.locals.userLogged.rols_id === 2) {
        return res.redirect ("/usuarios/registro")
    } 
    next();
}
module.exports = adminMiddleware