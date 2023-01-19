//  *                            /routes/persona.js
//  Rutas para persona
const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// persona
//router.post('/', personaController.crearPersona );
router.get('/getPersona', personaController.getPersona );
router.put('/editar/:id', personaController.editarPersona );
//router.get('/:id', personaController.obtenerPersona );
//router.delete('/:id', personaController.eliminarPersona );
module.exports = router;


