const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const multer = require('multer');
const path = require('path')
const registerValidations = require('../middlewares/registerValidation')
const editUserValidation = require('../middlewares/editUserValidation')

// traigo el middleware para ver si hay alguien logeado y lo paso a la ruta de register y del login
const guestMiddleware = require("../middlewares/guestMiddleware")

//admin middleware para que pueda registrar usuarios
const adminMiddleware = require("../middlewares/adminMiddleware")

//traigo el middle de auth para evitar el error de la ruta /profile y lo paso al profile
const authMiddleware = require("../middlewares/authMiddleware")


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
router.get('/login', guestMiddleware ,userController.login);
// Esta se encarga de procesr el login
router.post("/login", registerValidations, userController.loginProcess)

// ruta de logout
router.get('/logout', userController.logout);

router.get('/perfil', authMiddleware, userController.profile);

// Registro de usuarios
router.get('/registro', guestMiddleware ,userController.register)
// Esta se encarga de procesr el registro
router.post('/registro',uploadFile.single('image'),registerValidations, userController.processRegister)

//ruta de edit
router.get('/edit/:id', userController.edit)

//router.put('/edit/:id', editUserValidation, uploadFile.single('image'), userController.actualizar)
router.put('/edit/:id', uploadFile.single('image'), editUserValidation, userController.actualizar)

//ruta de detalle

router.get('/detalle/:id', authMiddleware ,userController.detalle)

module.exports = router;