const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// Generar una ruta, en este caso raiz
router.get('/', mainController.index);
router.get('/contactenos', mainController.contactenos)


module.exports = router;