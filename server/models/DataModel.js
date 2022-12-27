const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    id:Number,
    name:String,
    phoneNumber:String
  });

  const DataModel = mongoose.model('Data',DataSchema)

  module.exports = DataModel