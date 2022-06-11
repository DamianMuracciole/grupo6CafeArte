const fs = require("fs");
const path = require ("path")
const User = require('../models/User')
const bcryptjs = require('bcryptjs');


// Me traigo el json que tiene la data de users y lo parseo
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { localsName } = require('ejs');
const { validationResult } = require('express-validator')

const userController = {   
    login: (req, res) => {
        res.render('users/login')
    }, 
    register: (req, res) => {
        //res.send("Estoy aca")
        res.render('users/register')
    },    
    processRegister: (req, res) => {
        //res.send("Ok, viniste por post") 
        //res.send(req.body) // cuando pongo el enctype="multipart/form-data" ya no recibo esto
        // res.send({
        //     body: req.body,
        //     file: req.file
        // })
        const resultValidation = validationResult(req)
        //res.send(resultValidation)
        //res.send(resultValidation.mapped())
        if(resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body            
            });   
        } else {
            //Esto es con modelo
            let userToCreate = {
                ...req.body,
                contrasena: bcryptjs.hashSync(req.body.contrasena, 10), //como estoy en un objeto, esta contrasena va a pisar a la que viene en el body
                dobleContrasena: bcryptjs.hashSync(req.body.dobleContrasena, 10),
                imagen: req.file.filename
            }
            User.create(userToCreate);
            res.redirect('/usuarios/login')
    
            // Todo esto es sin modelo
            /*
            let newUser={
                id: users[users.length -1].id + 1,
                    ...req.body,
                    imagen : req.file.filename        
                }
    
                users.push(newUser)
                fs.writeFileSync(usersFilePath, JSON.stringify(users));
                res.redirect('/usuarios/login')
                //res.send("No hubo errores y se pasaron las validaciones!")
            */
        }
    }
};

module.exports = userController;