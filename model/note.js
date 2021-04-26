const mongoose = require('mongoose')

//para evitar los deprecados

//para evitar los deprecados

const noteSchema = new mongoose.Schema({
    //student_id:{type:mongoose.Schema.Types.ObjectId,ref:'Student'},
    //class_id:{type:mongoose.Schema.Types.ObjectId,ref:'Class'},
    //date: {type:Date,required:true},
    type: {type:String,unique:true},
})

module.exports = mongoose.model('Note',noteSchema)