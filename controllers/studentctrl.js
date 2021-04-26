const Student = require('../model/student')

exports.create = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message:'No se agregaron datos'
        })
    }
}