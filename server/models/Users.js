const mongoose = require('mongoose')

const {Schema} = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true    
    },
    password: {
        type:String,
        required:true
    },
    landmark : {
        type:String,
        required:true
    },
    street: {
        type:String,
        required:true
    },
    city : {
        type:String,
        required:true
    },
    pincode : {
        type:String,
        required:true
    }

}) 

module.exports= mongoose.model('user', UserSchema);