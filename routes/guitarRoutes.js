const express = require('express');
const { getAllGuitars, createGuitar, updateGuitarById, deleteGuitarById } = require('../controllers/guitarController');

const guitarRouter = express.Router();

guitarRouter.get('/obtener-guitarras', getAllGuitars);
guitarRouter.post('/crear-guitarra', createGuitar);
guitarRouter.put('/actualizar-guitarra', updateGuitarById);
guitarRouter.delete('/borrar-guitarra', deleteGuitarById);

module.exports = guitarRouter;