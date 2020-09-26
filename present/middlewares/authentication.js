const { verifyToken } = require('../helpers/jwt')
const  modelUser  = require('../models/modelUser')

function authentification(req, res, next){
    //  console.log(req.session)
    if(req.session.token){
        const decode = verifyToken(req.session.token)

        modelUser.findAll({
            where:{
                id: decode.id
            }
        }).then(data=>{
            if(data.length>0){
                next()
            }else{
                res.redirect('/user/login')
            }
        })
    }else{
        res.redirect('/user/login')
    }
}

module.exports = authentification