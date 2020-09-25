const express = require('express');
const router = express.Router();
const user = require('./indexUser')
const todo = require('./indexTodo')

router.get('/', (req, res) => {
    res.send('Welcome to TODO ACTIVITY')
})

router.use('/user', user)
router.use('/todo', todo)

module.exports = router