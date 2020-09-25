const express = require('express');
const router = express.Router();
const ControllerUser = require('../controllers/controllerUser');

router.get('/register', ControllerUser.formRegister)
router.post('/register', ControllerUser.register)
router.get('/login', ControllerUser.formLogin)
router.post('/login', ControllerUser.login)
router.get('/logout', ControllerUser.logout)

module.exports = router