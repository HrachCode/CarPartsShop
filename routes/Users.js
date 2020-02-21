const express = require('express')
const users = express.Router()
const jwt = require('jsonwebtoken')
const sha256 = require('sha256');
const User = require('../models/User')



process.env.SECRET_KEY = 'supersecretsdecodejvst'

users.post('/register', (req, res) => {
 
  const userData = {
    first_name,
    email,
    password,
    phone    
  } = req.body;
 userData.password = sha256(req.body.password)
  User.findOne({
    email: req.body.email
  })
    .then(user => {
   if(user){
     return res.status(401).json({message: 'User already exists'})
   }
      if (!user) {
              
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send({
                error:err
              })
            })
        
      } else {
        res.status(402).json({ message: 'User already exists' })
      }
    })
    .catch(err => {
      if(err){
        return res.status(401).json({message: 'User already exists'})
      }
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
       
        
        if (sha256(req.body.password) === user.password) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone:user.phone
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
users.post('/usersetingUbdate',async (req, res) => {
    let user = { email: req.body.user.mail};
    const userUpdate = { name: "Pizza Face" };
    try { user = await new Promise( ( resolve, reject ) => {
        User.findOneAndUpdate( { email: req.body.user.mail }, { $set: { first_name: "Test" } }, {  new: true },
            ( error, obj ) => { if( error ) { console.error( JSON.stringify( error ) );
              return reject( error ); }
              resolve(   console.log(obj) );
        });
    })
    }
              catch( error ) { /* set the world on fire */ }
    // User.findOne({
  //   email:req.body.user.mail
  // }).then(user=>{

      // if(req.body.user.Password){
    //   if(sha256(req.body.user.Password) !== user.password){
    //     console.log(2);
    //       return res.status(400).json({message:'password is invalid'})
    //   }else{
    //       console.log('ok');
    //   }
    // }

  // })


    // User.findOneAndUpdate({ email: req.body.user.mail }, { $set: { first_name: "Naomi" } }, { new: true }, function(err, doc) {
    //     console.log(doc)
    // });
})

module.exports = users