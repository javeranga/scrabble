const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    professor_id: {type:Number,required:true},
    facultyName: {type:String},
    subject: {type:String,required:true},
    group_id: {type:String},
    date: {type:Date,required:true},
    nroStuCampus: {type:Number,required:true},
    nroStuRemote:{type:Number,required:true},
    nroStuSigned:{type:Number,required:true},
})

module.exports = mongoose.model('Class',classSchema)