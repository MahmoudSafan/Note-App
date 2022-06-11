const Router = require("express").Router();
const noteCtrl = require('../controllers/noteController');

Router.get('/',noteCtrl.getAllNotes);
Router.post('/note/create', noteCtrl.create);
Router.get('/note/:id', noteCtrl.getSingleNote);
Router.put('/note/update', noteCtrl.update);
Router.delete('/note/delete',noteCtrl.remove);

module.exports = Router