const ModelTodo = require('../models/modelTodo')
const ModelUser = require('../models/modelUser')
const { verifyToken } = require('../helpers/jwt')
const { token } = require('morgan')

class ControllerTodo {

    static list(req, res) {
        const decode = verifyToken(req.session.token)
        ModelTodo.findAll({
            include: {
                model: ModelUser,
                required: true
            },
            where: {
                userlistId: decode.id
            }

        })
            .then(response => {
                // console.log(response)
                res.render('todo/list', { response })
            })
    }

    static async input(req, res) {
        // res.render('todo/list')
        const decode = verifyToken(req.session.token)
        req.body.userlistId = decode.id
        ModelTodo.create(req.body)
            .then((ress) => {
                res.redirect('/todo')
            })
            .catch(err => {
                res.json(err)
            })
    }

    static async findOne(req, res) {
        let data = await ModelTodo.findAll({
            where: {
                id: req.params.id
            }
        })
        res.render('todo/edit', { data });
    }

    static async editData(req, res) {
        ModelTodo.update(req.body, { where: { id: req.params.id } })
            .then((response) => {
                res.redirect('/todo')
            })
            .catch(err => {
                res.json(err)
            })
    }

    static async delete(req, res) {
        let data = await ModelTodo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/todo' );
    }
}

module.exports = ControllerTodo