const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.get('/crear', userController.getCrear);
router.post('/crear', userController.postCrear);
router.get('/eliminar', userController.getEliminar);
router.post('/eliminar', userController.postEliminar);

module.exports = router;