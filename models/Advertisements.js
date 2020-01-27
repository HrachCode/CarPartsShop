const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ADVERTISEMENT = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    carMator: {
    type: String
  },
  details:{
    type:String,
    required:true
  },
  email: {
    type: String,
      },
  first_name:{
type:String,
required:true
  },
  textInformation:{
    type:String
  },
  phone:{
      type:String,
  },
  articul:{
      type:Number
  },
  carModel: {
    type: String,
    required: true
  },
  phone:{
    type:String,
    
  },
  carType:{
      type:String,
      required: true
  },
  carYear:{
    type:String,
    required: true
},
img:{
    type:Array,
    default:Array

},
productCotegory:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Advs = mongoose.model('advertisements', ADVERTISEMENT)