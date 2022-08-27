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
                        url: `/api/users/${user.id}`,
                        image: `http://localhost:3000/images/users/${user.image}`
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
                username: user.username,
                birth_date: user.birth_date,
                status: user.status,
                image: `http://localhost:3000/images/users/${user.image}`
              }                
                res.json(usuario);
            }).catch(error =>
                res.send(error));

    },
    lastUser: (req, res) => {
        User.findOne({               
                order: [[ 'created_at', 'DESC']]
            })
        .then(user => {            
            let usuario = {
              id: user.id,
              name: user.first_name,
              lastName: user.last_name,
              email: user.email,
              username: user.username,
              birth_date: user.birth_date,
              status: user.status,
              image: `http://localhost:3000/images/users/${user.image}`
            }
            let respuesta = {
                lastUser: {
                    id: user.id,
              name: user.first_name,
              lastName: user.last_name,
              email: user.email,
              username: user.username,
              birth_date: user.birth_date,
              status: user.status,
              image: `http://localhost:3000/images/users/${user.image}`
                }
            }
                            
              res.json(respuesta);
          }).catch(error =>
              res.send(error));
    },
    create: function(req, res){
        User.create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,

            })
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200,
                    created: "ok"
                })
            })
            .catch(err => console.log(err));
    }
};

module.exports = userControllerApi;