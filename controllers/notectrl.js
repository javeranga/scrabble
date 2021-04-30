const Note = require('../model/note')

exports.create = (req,res) => {
    if(!req.body.type){
        return res.status(400).send({
            message:'No se agregaron datos'
        })
    } 
  
    const note = new Note({
        student_id:req.body.student_id,
        type:req.body.type
    })

    note.save().then(data =>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send({
            message: error.message || 'Error al crear la nota'
        })
    })
}
