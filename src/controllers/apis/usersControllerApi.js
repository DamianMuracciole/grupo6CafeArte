//const { Op } = require("sequelize");
const db = require('../../database/models');
//const path = require('path');
const User = db.User;

const userControllerApi = {
    all: (req,res) => {
        User.findAll()
            .then(usersDB => {
                let users = [];
                usersDB.forEach(user => {
                    let userForApi = {
                        id: user.id,
                        name: user.first_name,
                        lastName:user.last_name,
                        email: user.email,
                        detail: `/api/users/${user.id}`,
                        image: `/images/users/${user.image}`
                    };
                    users.push(userForApi);
                });
                let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/users'
                },
                total: users.length,
                usuarios: users
            }
                res.json(respuesta);
            }).catch(error => 
                res.send(error)
        )},

    usersData: (req,res) => {
        User.findByPk(req.params.id)
        .then(user => {
            
              let usuario = {
                id: user.id,
                name: user.first_name,
                lastName: user.last_name,
                email: user.email,
                image: `/images/users/${user.image}`
              }                
                res.json(usuario);
            }).catch(error =>
                res.send(error));

    }
};

module.exports = userControllerApi;