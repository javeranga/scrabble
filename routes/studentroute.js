module.exports = (app) => {
    const studentctrl = require('../controllers/studentctrl') 
    app.post('/student/create',studentctrl.create)
    app.get('/student/getall',studentctrl.getAll )
    app.get('/student/get/:id',studentctrl.getOne )
    app.put('/student/update/:id',studentctrl.update)
    app.delete('/student/delete/:id',studentctrl.deleteOne)
} 