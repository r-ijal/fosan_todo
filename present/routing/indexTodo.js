const express = require('express');
const router = express.Router();
const ControllerTodo = require('../controllers/controllerTodo');
const authentication = require('../middlewares/authentication');

router.get('/', authentication, ControllerTodo.list)
router.post('/', authentication, ControllerTodo.input)
router.get('/edittodo/:id', authentication, ControllerTodo.findOne)
router.post('/:id', authentication, ControllerTodo.editData)
router.get('/delete/:id', authentication, ControllerTodo.delete)

module.exports = router