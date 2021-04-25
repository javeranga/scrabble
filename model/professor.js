const mongoose = require('mongoose')

const professorSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    facultyName:{type:String},
    email:{type:String,required:true, unique:true},
})

module.exports = mongoose.model('Professor',professorSchema)