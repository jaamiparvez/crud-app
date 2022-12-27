const express = require('express');
const router = express.Router();
const DataModel = require('../models/data')

router.get('/',async (req,res)=>{
    const data = await DataModel.find()
    res.json(data)
})

router.get('/:id',async (req,res)=>{
  const {id} = req.params
  const item = await DataModel.find({id:id});
  res.json(item)
})

router.post('/',async (req,res)=>{
    const {id,name,phoneNumber} = req.body;
    const data = new DataModel({
      id,
      name,
      phoneNumber
    })
    const newData = await data.save();
    res.json(newData);
  })

  router.put('/:id',async (req,res)=>{
    const {id} = req.params
    const {name,phoneNumber} = req.body;
    const item = await DataModel.findById(id);
    item.name = name
    item.phoneNumber = phoneNumber
    await item.save()
    res.json(item)
  })



router.delete('/:id',async (req,res)=>{
   const {id} = req.params
   const item = await DataModel.findById(id)
   await item.remove()
   res.status(204).json(item);
})

module.exports = router