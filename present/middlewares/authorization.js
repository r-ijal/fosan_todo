const { verifyToken } = require('../helpers/jwt')
// const modelUser = require('../models/modelUser')
const modelTodo = require('../models/modelTodo')

// function authoricationPejabat(req, res, next) {
//     if (req.user.role == 'pejabat') {
//         next()
//     } else {
//         next({ status: 400, msg: ' anda bukan pejabat' })
//     }
// }

const authorization = (req, res, next) => {
    const { id } = req.params
    const decode = verifyToken(req.session.token)

    // console.log(id)
    // console.log(decode)

    modelTodo.findAll({
        where: {
            id: id,
            userlistId: decode.id
        }
    })
    .then(data => {
        // console.log(data)
        if (data.length>0) {
            next()
        } else {
            // res.json({ status: 403, pesan: 'ini bukan akun anda' })
            // res.redirect('/todo')
            res.redirect({
                    status: 403,
                    pesan: 'ini bukan todo anda'
                },
                '/todo')
            // return res.redirect('/todo', { pesan: ' ini Bukan Akun Anda' })
            // next({ status: 400, pesan: ' ini Bukan Akun Anda' })
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
    authorization
}
