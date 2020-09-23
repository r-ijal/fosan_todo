const { response } = require('express')
const TodoModel = require('../models/todo')

class Todo {
    
    static list(req, res){
        TodoModel.findAll()
        .then(response => {
            res.render('todo/list', {response})
        })
        // res.send('Ini Halaman List Todo Controller')
    }
    
}

module.exports = Todo