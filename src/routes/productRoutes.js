const express = require('express');

const productsController = require('../controllers/productsController')
const router = express.Router();


router.get('/productCart', productsController.productCart)
router.get('/comoComprar', productsController.comoComprar)
router.get('/productDetail', productsController.productDetail)
router.get('/crearProducto', productsController.crearProducto)
router.get('/editarProducto', productsController.editarProducto)

//router.get('/productDetailNew', productsController.productDetailNew)
router.get('/producto/:id', productsController.productoByID)


module.exports = router;






