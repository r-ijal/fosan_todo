const { hashPassword,compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')
const UserModel = require('../models/user')

class User{
    static formRegister(req, res){
        res.render('user/formRegister')
        
    }
    static register(req, res){
        req.body.password = hashPassword(req.body.password)
        UserModel.create(req.body)
        .then((response) => {
            res.redirect('/user/login')
        })
    }
    static formLogin(req, res){
        res.render('user/formLogin', {pesan : ''})
        
    }
    static login(req, res){

        UserModel.findAll({ where: {username: req.body.username}})
        .then((response) => {
            if(response.length > 0){
                console.log(compare(req.body.password, response[0].dataValues.password))
                if(compare(req.body.password, response[0].dataValues.password)){
                    let token = generateToken(response[0].dataValues);
                    req.session.token = token;
                    res.redirect('/todo/list')
                }else{
                    res.render('user/formLogin',{pesan: 'password salah'})
                }
            }else{
                res.render('user/formLogin',{pesan: 'username tidak terdaftar'})
            }
        })
    }
}

module.exports = User