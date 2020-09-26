const express = require('express');
const router = express.Router();
const ControllerTodo = require('../controllers/controllerTodo');
const authentication = require('../middlewares/authentication');
const { authorization } = require('../middlewares/authorization')

router.get('/', authentication, ControllerTodo.list)
router.post('/', authentication, ControllerTodo.input)
router.get('/edittodo/:id', authentication, authorization, ControllerTodo.findOne)
router.post('/:id', authentication, ControllerTodo.editData)
router.get('/delete/:id', authentication, authorization, ControllerTodo.delete)

module.exports = router