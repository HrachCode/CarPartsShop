const express = require('express')
const advertisements = express.Router()
const Avds = require('../models/Advertisements')

advertisements.post('/register',(req,res)=>{
   
   if(req.body.car[0].adder){
    
    const data = {
        id:req.body.user._id,
        first_name:req.body.user.first_name,
        email:'admin@mail.ru',
        phone:'+37494111669',
        articul:req.body.car[0].id,
        carType:req.body.car[0].carType,
        carModel:req.body.car[0].carModel,
        carYear:req.body.car[0].carYear,
        carMator:req.body.car[0].carMator,
        textInformation:req.body.car[0].textInformation,
        img:req.body.car[0].img,
        productCotegory:req.body.car[0].carTex,
        price:req.body.car[0].price,
        details:req.body.car[0].details
}
Avds.create(data).then(data=>{
    if(data){
         return res.status(200).json({data:data})
    }
 })
 .catch(err=>{
     console.log(err);
 })


   }else{
    const data = {
        id:req.body.user._id,
        first_name:req.body.user.first_name,
        email:req.body.user.email,
        phone:req.body.user.phone,
        articul:req.body.car[0].id,
        carType:req.body.car[0].carType,
        carModel:req.body.car[0].carModel,
        carYear:req.body.car[0].carYear,
        carMator:req.body.car[0].carMator,
        textInformation:req.body.car[0].textInformation,
        img:req.body.car[0].img,
        productCotegory:req.body.car[0].carTex,
        price:req.body.car[0].price,
        details:req.body.car[0].details
}

Avds.create(data).then(data=>{
   if(data){
        return res.status(200).json({data:data})
   }
})
.catch(err=>{
    console.log(err);
})
   }


})

advertisements.post('/getPurches',(req,res)=>{

  
    Avds.find({id:req.body._id}).then(data=>{
        if(data){
            return res.status(200).json({user:data})
        }
    })
})
advertisements.post('/deleting',(req,res)=>{
  
    Avds.findOneAndDelete({articul:req.body._id})
      
    .then(data=>{
        if(data){
           
             return res.status(200).json({'message':'successefully dalated'})   
        }
    })
    .catch(err=>{
        console.log('DONT FINDE', err)
     })
})

advertisements.get('/getAll',(req,res)=>{
       
    Avds.find({})
    .then(data=>{
        
        if(data){
            res.status(200).json({data:data})
        }
    })
    .catch(err=>{
        console.log(err);
        
    })
})

advertisements.get('/getAdminProducts',(req,res)=>{
    Avds.find({});
    
})
module.exports = advertisements