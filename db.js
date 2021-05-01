const mongoose = require('mongoose')
const port=3000


const conectarDB =() => {
        mongoose.set('useCreateIndex',true)
        mongoose.connect('mongodb+srv://admin:password@scrabble.q8hcd.mongodb.net/scrabbleDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(error,res)=>{
        if(error){
            console.log.apply('Error de conexión',error)
        } else{
            console.log('Nos conectamos correctamente')
        }
    })
}

module.exports ={conectarDB}
