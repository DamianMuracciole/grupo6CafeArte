const fs= require('fs');
const path = require ("path")
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


function recordameMiddleware (req, res, next){
    
    if (req.cookies.recordame != undefined && req.session.userToLogin == undefined ){
        // console.log(req.session.userToLogin);
        // let usersJSON = fs.readFileSync(usersFilePath,'utf-8')
        let users;
        if (usersJSON == ""){
            users = []
        } else {
            users = usersJSON
            
        }
        let usuariosAloguearse
        
        for (let i = 0; i < users.length; i++){
            if (users[i].correo == req.cookies.recordame){
                usuariosAloguearse = users[i];
                break
            }
            
        }
        
        req.session.userLogged = usuariosAloguearse
    }
    
    next();
}


module.exports = recordameMiddleware;