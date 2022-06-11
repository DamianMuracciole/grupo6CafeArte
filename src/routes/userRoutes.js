const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const multer = require('multer');
const path = require('path')
const registerValidations = require('../middlewares/registerValidation')


// Configuracion Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        //console.log(file); si quiero ver si me llega el file o no
        let fileName = Date.now() + "_img" + path.extname(file.originalname);
        cb(null, fileName)
    }
})

const uploadFile = multer({ storage })

// Generar una ruta, en este caso raiz
router.get('/login', userController.login);

// Registro de usuarios
router.get('/registro', userController.register)
// Esta se encarga de procesr el registro
router.post('/registro',uploadFile.single('image'),registerValidations, userController.processRegister)

module.exports = router;