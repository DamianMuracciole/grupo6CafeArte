function adminMiddleware (req, res, next){
    if(req.session.userLogged && res.locals.userLogged.rols_id === 2) {
        console.log("🚀 ~ file: adminMiddleware.js ~ line 3 ~ adminMiddleware ~ res.locals.userLogged.rols_id", res.locals.userLogged.rols_id)
        return res.redirect ("/usuarios/registro")
    } 
    next();
}
module.exports = adminMiddleware