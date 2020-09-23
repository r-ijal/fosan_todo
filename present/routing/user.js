const express = require('express');
const User = require('../controllers/user');
const router = express.Router();

// router.get('/', user.list);
router.post('/register', User.register)
router.get('/register', User.formRegister)
router.post('/login', User.login)
router.get('/login', User.formLogin)

module.exports = router