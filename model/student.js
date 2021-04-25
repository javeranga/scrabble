const mongoose = require('mongoose')
const Schema = mongoose.Schema

var studentSchema=new Schema({
    firstName: {type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    facultyName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
})

module.exports = mongoose.model('Student',studentSchema)