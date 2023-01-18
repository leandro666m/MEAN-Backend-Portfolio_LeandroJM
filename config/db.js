const mongoose = require('mongoose');
require('dotenv').config( { path: 'variables.env' } );

const conectarDB = async () => {

    try {
        // *conexion a la BD
        await mongoose.connect(
            process.env.DB_MONGO,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                
            },
            /* (err) => {
                if (err) {
                    console.log('****************ERROR DE CONEXION****************');
                } else {
                    console.log('****************CONEXION CORRECTA****************');
                }             } */
        );
    } catch (error) {
        console.log('Se produjo un error en la conexion: ', error);
        process.exit(1); // !detenemos la app       
    }
}

module.exports = conectarDB