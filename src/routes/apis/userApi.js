const express = require('express');
const router = express.Router();
const usersApi = require('../../controllers/apis/usersControllerApi');

//Rutas a los usuarios

router.get('/', usersApi.all);
router.get('/lastuser', usersApi.lastUser);
router.get('/:id', usersApi.usersData);
router.post('/create', usersApi.create)

module.exports = router;