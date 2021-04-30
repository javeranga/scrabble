const Student = require('../model/student')

exports.create = (req,res) => {
    if(!req.body.email){
        return res.status(400).send({
            message:'No se agregaron datos'
        })
    }

    const student = new Student({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
        facultyName:req.body.facultyName,
        email:req.body.email
    })

    student.save().then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send({
            message: error.message || 'Error al crear el usuario'
        })
    })
}

exports.getAll=(req,res)=>{
    Student.find()
    .then(students=>{
        res.send(students)
    })
    .catch (error=>{
        res.status(500).send({
            message:error.mesage || 'No se encontraron estudiantes'
        })
    }) 
}