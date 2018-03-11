const User = require('../models/model.user')
const token = require('../routes/middelware/auth')
const has = require('../routes/middelware/hash')

module.exports = {
    signIn (req, res){
        User.findOne({email : req.body.email}).then(data=>{
            if(data){
                if(has.compare(req.body.password, data.password)){           
                    res.status(200).json({
                        message: 'logged in',
                        data:token.generate({id:data.id,name:data.name})
                    })
                }else{
                    res.status(404).json({
                        message: 'password is incorect'
                    })
                }
            }else{
                res.status(404).json({
                    message: 'email is incorect'
                })
            }
        }).catch(err=>{
            res.send(err)
        })
    }, 
    signUp (req, res){
        let user = new User(req.body)
        user.save().then(data=>{
            res.send({
                message : 'new user created',
                data
            })
        })
    }
}