const fs= require('fs');
const path = require ("path")
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models/index');
const User = require("../database/models/User");
const sequelize = db.sequelize
const Users = db.User;


function recordameMiddleware (req, res, next){
    
    if (req.cookies.recordame != undefined && req.session.userToLogin == undefined ){
        // console.log(req.session.userToLogin);
        // let usersJSON = fs.readFileSync(usersFilePath,'utf-8')
        // let users;
        // if (usersJSON == ""){
        //     users = []
        // } else {
        //     users = usersJSON
            
        // }
        let usuariosAloguearse
        
        for (let i = 0; i < Users.length; i++){
            if (Users[i].email == req.cookies.recordame){
                usuariosAloguearse = Users[i];
                break
            }
            
        }
        
        req.session.userLogged = usuariosAloguearse
    }
    
    next();
}


module.exports = recordameMiddleware;