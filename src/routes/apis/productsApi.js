const express = require('express');
const router = express.Router();
const productsApi = require('../../controllers/apis/productsControllerApi');

//Rutas a los usuarios

router.get('/', productsApi.all);

router.get('/:id', productsApi.productsData);

module.exports = router;