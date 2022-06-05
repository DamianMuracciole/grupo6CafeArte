const express = require('express');
const productsController = require('../controllers/productsController')
const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({    
    destination: function(req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, file.fieldname + uniqueSuffix + path.extname(file.originalname));
        cb(null, file.fieldname + file.originalname);
    }
})

const upload = multer({ storage: storage });


router.get('/productCart', productsController.productCart)
router.get('/howToBuy', productsController.howToBuy)

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id/', productsController.productDetail)
router.get('/productDetail', productsController.productDetail)
router.get('/crearProducto', productsController.crearProducto)
router.post('/crearProducto',upload.any(),productsController.create)

/*** EDIT ONE PRODUCT ***/ 
// no es una mala practica repetir las rutas de get y put, como aca
router.get('/editarProducto/:id', productsController.editarProducto)
router.put('/editarProducto/:id', upload.any(), productsController.update); 

// mostrar todos los productos
router.get('/products', productsController.index )

//router.get('/productDetailNew', productsController.productDetailNew)
router.get('/products/:id', productsController.productoByID)


//
router.delete('/products/:id', productsController.destroy);




module.exports = router;






