// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que se quiere loguear por su email
//DONE - 3. Buscar a un usuario por su id
// 3.5 Buscar a un usuario por cualquier field
// 4. Editar la informacion de un usuario
// 5. Eliminar a un usuario de la DB
// 6. Buscar a todos los usuarios
//const fs = require("fs");
let db = require('../database/models/index'); //requerimos sequelize dentro del controlador
const Op = db.Sequelize.Op;


const User = {
    fileName: './src/data/users.json',

    // Me trae todos los usuarios
    getData: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                res.send(usuarios);
                console.log(usuarios);
            })
            .catch(err => {
                res.send(err);
            })
            console.log(usuarios);
    },
    generateId: function() {
        
        let allUsers = this.findAll();
        // Tengo que buscar el ultimo id
        let lastUser = allUsers.pop(); // el pop solo modifica la variable que tengo aqui, asi que no modifica el archivo de usuarios
        // Tengo que tener en cuenta que el archivo puede estar vacio, entonces en el json lo dejo como [] para que no de problema y me devuelva un array vacio
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    // Por ahora va haciendo lo mismo que el getData, pero para el futuro veremos porque se precisa...
    findAll: function() {
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id === id);
        return userFound;
        // Si no lo encuentra me devuelve undefined
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user[field] === text); //Me trae el primero que se encuentre, se puede hacer otro metodo que me traiga todo, pero queda para adelante...
        return userFound;
        // Si no lo encuentra me devuelve undefined
    },
    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function(id) {
        let allUsers = this.findAll();
        // Devolver a todos los usuarios menos el que me dieron
        let finalUsers = allUsers.filter(user => user.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;

//console.log(User.delete(32));
// Puedo correr un console log aca nada mas poniendo: node src/models/User.js
//console.log(User.getData());
//console.log(User.findByPk(10));
//console.log(User.findByField('correo', 'pepito@yahoo.com'));
// console.log(User.create({
//     "nombre": "Juan",
//     "apellido": "Karlos",
//     "usuario": "juanka",
//     "correo": "juanka@yahoo.com",
//     "fechaNacimiento": "1970-10-22",
//     "contrasena": "45612",
//     "dobleContrasena": "45612" }));
