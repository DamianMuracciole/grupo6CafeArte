//NOTA (2022-07-25) de Damian Muracciole
//Este archivo se trató de limpiar comentarios de código ya no utilizable 
//por cuestiones de legibilidad
//para verlo completo referirise a la rama feature-feature-RemenberMe

// const fs= require('fs');
// const path = require ("path")
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models')
const Users = db.User;


function recordameMiddleware (req, res, next){
    
    if (req.cookies.recordame != undefined && req.session.userToLogin == undefined ){
        // console.log(req.session.userToLogin);
        // let usersJSON = fs.readFileSync(usersFilePath,'utf-8')
        //let users;
        // if (usersJSON == ""){
        //     users = []
        // } else {
        //     users = usersJSON
            
        // }

        Users.findOne({
            where: {
                email: req.cookies.recordame
            }            
        }).then((user) => {
            req.session.userLogged = user;
            //console.log(req.session.userLogged);
        })
        // let usuariosAloguearse
        // for (let i = 0; i < users.length; i++){
        //     if (users[i].correo == req.cookies.recordame){
        //         usuariosAloguearse = users[i];
        //         break
        //     }
        // }
    }
    next();
}


module.exports = recordameMiddleware;