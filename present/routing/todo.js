const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');
const authentification = require('../middlewares/authentification');

router.get('/list', authentification, todo.list)

module.exports = router