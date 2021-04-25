const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    student_id:{type:mongoose.Schema.Types.ObjectId,ref:'Student'},
    class_id:{type:Number,required:true},
    date: {type:Date,required:true},
    Type: {type:String,required:true},
})

module.exports = mongoose.model('Note',noteSchema)