require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('starting on port 3000');
    app.listen(3000);
  })




  const DataSchema = new mongoose.Schema({
    id:Number,
    name:String,
    phoneNumber:String
  });
  
  const DataModel = mongoose.model('Data', DataSchema);


  const UserSchema = new mongoose.Schema({
    user:String,
    password:String,
    role:String
  });
  
  const UserModel = mongoose.model('User', UserSchema);

app.get('/data',async (req,res)=>{
    const data = await DataModel.find()
    res.json(data)
})

app.get('/data/:id',async (req,res)=>{
  const {id} = req.params
  const item = await DataModel.find({id:id});
  res.json(item)
})

app.post('/data',async (req,res)=>{
    const {id,name,phoneNumber} = req.body;
    const data = new DataModel({
      id,
      name,
      phoneNumber
    })
    const newData = await data.save();
    res.json(newData);
  })

  app.put('/data/:id',async (req,res)=>{
    const {id} = req.params
    const {name,phoneNumber} = req.body;
    const item = await DataModel.findById(id);
    item.name = name
    item.phoneNumber = phoneNumber
    await item.save()
    res.json(item)
  })



app.delete('/data/:id',async (req,res)=>{
   const {id} = req.params
   const item = await DataModel.findById(id)
   await item.remove()
   res.status(204).json(item);
})

function isLoggedIn(req,res,next){

}
// app.listen(3001, function(){
// console.log('server is running...')
// })
app.post('/login',async (req,res)=>{
  console.log('in login route')
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
  //goolge: how to check user and password in mogoose
})
  