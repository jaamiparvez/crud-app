require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const DataRoute = require('./routes/data')
const LoginRoute = require('./routes/login')


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('starting on port 3000');
    app.listen(3000);
  })

app.use('/data',DataRoute)
app.use('/login',LoginRoute)