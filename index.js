const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const routes = require('./routes/persona');

const app = express(); //* Creamos el servidor

conectarDB();  //* Conectamos a la BD
//Persona.create(  require("./data.json") ); //! Usar sólo la 1ra vez para que Cree el Documento(MEAN-portf....) y la Coleccion(personas)

// Middleware
app.use( express.json() ); //se habilita para que se pueda enviar json a nuestra aplicacion
app.use( cors() );

// rutas   ------URL = 'http://localhost:4000/';
app.use(  routes );

//servidor escuchando en el puerto 4000
app.listen( 4000, ()=>{ console.log('---Express corriendo. Escuchando en puerto 4000')} );
