require('./config')
const mongoose = require('mongoose')
const Userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports= mongoose.model('users',Userschema)