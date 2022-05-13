const express = require('express');

const productsController = require('../controllers/productsController')
const router = express.Router();


router.get('/productCart', productsController.productCart)
router.get('/comoComprar', productsController.comoComprar)
router.get('/productDetail', productsController.productDetail)
router.get('/crearProducto', productsController.crearProducto)
router.get('/editarProducto', productsController.editarProducto)


module.exports = router;






