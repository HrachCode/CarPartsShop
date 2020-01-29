const express = require('express')
const filter = express.Router()
const Goods = require('../models/Goods')
const avds = require('../models/Advertisements')

filter.get('/filterProduct/:id',(req,res)=>{
   
    Goods.find({cotegory:req.params.id,productCotegory:"womensProduct"})
    .exec(function(err, goods) {
      if (err) throw err;
     
      res.status(200).json(goods)
  });
})

filter.post('/cartVew',(req,res)=>{
  const id = req.body.id
  Goods.findById(id, function (err, item) { 
    if(err){
      res.status(401).json({message:'bead request, file dont finde'})
    }
    console.log(item);
     res.json(item)
   
  } );
})
filter.post('/stok/cartVew',(req,res)=>{
  
  const id = req.body.id
  Goods.findById(id, function (err, item) { 
    if(err){
      res.status(401).json({message:'bead request, file dont finde'})
    }
    
     res.json(item)
   
  } );
})
filter.post('/productid',(req,res)=>{
  const id = req.body.id
  avds.findById(id)
  .then(data=>{
    if(data){
      return res.status(200).json({product:data})
    }    
  })
})
filter.post('/prodId',(req,res)=>{
  avds.findById(req.body.id)
  .then(data=>{
    res.status(200).json(data)
    
  }).catch(err=>{
    res.status(400).json({message:'note found'})
  })
  
})
module.exports = filter