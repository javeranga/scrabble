module.exports = (app) =>{
    //cargar controlador en una variable
    const noteCtrl = require('../controllers/notectrl')
    //ruta
    app.post('/note/create',noteCtrl.create)
    app.get('/note/getall',noteCtrl.getAll)
    app.get('/note/get/:id',noteCtrl.getOne)
    app.put('/note/update/:id',noteCtrl.update)
    app.delete('/note/delete/:id',noteCtrl.deleteOne)
}