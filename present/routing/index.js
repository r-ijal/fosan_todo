const express = require('express');
const router = express.Router();
const user = require('./indexUser')
const todo = require('./indexTodo')
const controller = require('../controllers/controllerUser')

router.get('/', controller.welcome)

router.use('/user', user)
router.use('/todo', todo)

module.exports = router