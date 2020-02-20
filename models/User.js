const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String
  },
 
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  },
  address:{
    type:String,
  },
  profileimg:{
    type:String
  },
  city:{
    type:String
  },
  state:{
    type:String
  }
})

module.exports = User = mongoose.model('users', UserSchema)