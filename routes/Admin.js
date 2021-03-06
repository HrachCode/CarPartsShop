const express = require('express')
const admin = express.Router()
const jwt = require('jsonwebtoken')
const sha256 = require('sha256');
const Admin = require('../models/Admin')



process.env.SECRET_KEY = 'supersecretsdecodejvst'

admin.post('/register', (req, res) => {
  
  const adminData = {
    first_name,
    password,
    } = req.body;
    adminData.password = sha256(req.body.password)
  User.findOne({
    first_name: req.body.first_name
  })
    .then(admin => {
      console.log(admin)
      if (!admin) {
         
          Admin.create(adminData)
            .then(admin => {
              res.json({ status:'Registered!' })
            })
            .catch(err => {
              res.send({
                error:err
              })
            })
        
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

admin.post('/login', (req, res) => {
  console.log(req.body);
  
  Admin.findOne({
    first_name: req.body.first_name
  })
    .then(user => {
      if (user) {
        if (usha256(req.body.password) === user.passwordser) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
                    }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'Admin does not exist' })
        }
      } else {
        res.json({ error: 'Admin does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})



module.exports = admin