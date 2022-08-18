const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')
const userController = require("../controllers/userControllers")

// Generar una ruta, en este caso raiz
router.get('/', mainController.index);
router.get('/contactenos', mainController.contactenos)

router.get('/api/users', userController.list);
router.get('/api/users/:id', userController.apiDetail);


module.exports = router;