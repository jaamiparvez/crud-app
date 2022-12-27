const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel')


router.post('/',async (req,res)=>{
    const {username,password} = req.body;
    UserModel.findOne({username:username,password:password}, function(err,user){
      if(err){
        console.log('error',err)
        return res.status(500).send()
      }
      if(!user){
        console.log('nouser found')
        return res.status(404).send()
      }
       // const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
      return res.json({user:user.user,role:user.role})
    })
    
  })

  module.exports = router