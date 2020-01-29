const express = require('express')
const filter = express.Router()
const Goods = require('../models/Goods')
const avds = require('../models/Advertisements')






filter.get('/filterProduct/:id',(req,res)=>{
    console.log(req.params.id)
    Goods.find({cotegory:req.params.id,productCotegory:"meanProduct"})
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
    
     res.json(item)
   
  } );
})


filter.post('/productid',(req,res)=>{
 console.log(req.body);
 const r = req.body
    if(Object.keys(req.body).length === 1){
            avds.find({carType:req.body.carType}).then(data=>{
             res.status(200).json(data)
      }).catch(err=>{
        if(err){
         return req.status(400).json({message:'note find'})
        }
        
      })
      
    }else if(Object.keys(req.body).length === 2){
      
      avds.aggregate([
        {
          '$match': {
            'carType': r.carType,
            'carModel': r.carModel
          }
        }
      ]).then(data=>{
        res.status(200).json(data)
        
      }).catch(err=>{
        if(err){
         return req.status(400).json({message:'note find'})
        }
        })
      
    }else if(Object.keys(req.body).length === 3){   
      
      avds.aggregate([
        {
            '$match': {
                'carType': r.carType, 
                'carModel': r.carModel, 
                'carYear': JSON.stringify(r.carYear)
            }
        }, 
    ]).then(data=>{
        
        res.status(200).json(data)       
      }).catch(err=>{
        if(err){
         return req.status(400).json({message:'note find'})
        }
        })
      
    }
    else if(Object.keys(req.body).length === 4){   
      
      avds.aggregate([
        {
            '$match': {
                'carType': r.carType, 
                'carModel': r.carModel, 
                'carYear': JSON.stringify(r.carYear),
                'carMator': JSON.stringify(r.carMator)
            }
        }, 
    ]).then(data=>{
        console.log(data);
        
        res.status(200).json(data)
        
      }).catch(err=>{
        if(err){
         return req.status(400).json({message:'note find'})
        }
        })
      
    }
 
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