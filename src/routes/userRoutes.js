const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')

// Generar una ruta, en este caso raiz
router.get('/login', userController.login);
router.get('/register', userController.register)

module.exports = router;