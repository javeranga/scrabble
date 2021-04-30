module.exports = (app) => {
    const studentctrl = require('../controllers/studentctrl') 
    app.post('/student/create',studentctrl.create)
    app.get('/student/getall',studentctrl.getAll )
} 