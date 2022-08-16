const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/apiProductsIdController')

// Generar una ruta a api productos ID
router.get('/', apiProductController.index);
router.get('/:id', apiProductController.detail);

module.exports = router;