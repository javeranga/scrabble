const mongoose = require('mongoose')
const port=3000


const conectarDB =() => {
        mongoose.connect('mongodb://localhost:27017/scrabbleDB',{useNewUrlParser:true,useUnifiedTopology:true},(error,res)=>{
        if(error){
            console.log.apply('Error de conexión',error)
        } else{
            console.log('Nos conectamos correctamente')
        }
    })
}

module.exports ={conectarDB}