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

exports.getAll=(req,res)=>{
    Note.find()
    .populate('student_id')
    .exec()
    .then(notes=>{
        res.send(notes)
    })
    .catch (error=>{
        res.status(500).send({
            message:error.mesage || 'No se encontraron estudiantes'
        })
    }) 
}

exports.update=(req,res)=>{
    if(!req.body.type){
        return res.status(400).send({
            message:'No se agregaron datos'
        })
    }   
    const note = {
        student_id:req.body.student_id,
        type:req.body.type
    }

    Note.findByIdAndUpdate(req.params.id,note,{new:true})
    .then(notes=>{
        res.send(notes)
    })
    .catch (error=>{
        res.status(500).send({
            message:error.mesage || 'No se encontraron estudiantes'
        })
    }) 
}

exports.deleteOne=(req,res)=>{
    if(!req.body){
        return res.status(400).send({
            message:'No se agregaron datos'
        })
    }   
    const note = {
        student_id:req.body.student_id,
        type:req.body.type
    }
    Note.findOneAndDelete(req.params.id,note)
    .then(notes=>{
        res.send(notes)
    })
    .catch (error=>{
        res.status(500).send({
            message:error.mesage || 'No se encontraron estudiantes'
        })
    }) 
}

exports.getOne=(req,res)=>{
    Note.findById(req.params.id)
    .then(notes=>{
        res.send(notes)
    })
    .catch (error=>{
        res.status(500).send({
            message:error.mesage || 'No se encontraron estudiantes'
        })
    }) 
}