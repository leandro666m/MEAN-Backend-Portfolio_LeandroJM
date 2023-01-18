//  *                            /routes/persona.js
//  Rutas para persona
const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// persona
router.post('/', personaController.crearPersona );
router.get('/getPersonas', personaController.obtenerPersonas );
router.put('/:id', personaController.actualizarPersona );
router.get('/:id', personaController.obtenerPersona );
router.delete('/:id', personaController.eliminarPersona );
module.exports = router;


