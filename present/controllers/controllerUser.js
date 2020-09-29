const { hashPassword, compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const ModelUser = require('../models/modelUser')

class ControllerUser {

    static welcome(req, res) {
        res.render('welcome/welcome')
    }

    static formRegister(req, res) {
        res.render('user/formRegister')
    }

    static register(req, res) {
        let post = req.body;
        post.password = hashPassword(post.password)
        ModelUser.create(post)
            .then((response) => {
                res.redirect('/user/login')
            })
            .catch(err => {
                res.json(err);
            })
    }

    static formLogin(req, res) {
        res.render('user/formLogin', { pesan: '' })
    }

    static async login(req, res) {
        // ModelUser.findAll({ where: { name: req.body.name } })
        //     .then((response) => {
        //         console.log(response)
        //         if (response.length > 0) {
        //             console.log(compare(req.body.password, response[0].dataValues.password))
        //             if (compare(req.body.password, response[0].dataValues.password)) {
        //                 let token = generateToken(response[0].dataValues);
        //                 req.session.token = token;
        //                 res.redirect('/todo/list')
        //             } else {
        //                 res.render('user/formLogin', { pesan: 'wrong password' })
        //             }
        //         } else {
        //             res.render('/user/formLogin', { pesan: 'name does not exist' })
        //         }
        //     })

        let data = await ModelUser.findAll({
            where: {
                name: req.body.name
            }
        })
        if (data.length > 0) {
            if (compare(req.body.password, data[0].dataValues.password)) {
                let token = generateToken(data[0].dataValues);
                req.session.token = token;
                req.session.save(function (err) {
                    if (!err) {
                        res.redirect('/todo')
                    }
                })
            } else {
                res.render('user/formLogin', { pesan: 'password anda salah' })
            }
        } else {
            res.render('user/formLogin', { pesan: 'anda tidak terdaftar' })
        }
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                console.log(err)
            }
        })
        res.redirect('/')
    }
}

module.exports = ControllerUser