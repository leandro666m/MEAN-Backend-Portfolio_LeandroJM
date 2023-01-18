//  *                            /models/Persona.js
const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema(
    {
        nombre: { type: String },
        comentario: { type: String },
        ciudad: { type: String },
        email: { type: String },
        telefono: { type: String },
        titulo: { type: String },
        educacion: [ 
                    {
                        id: { type: mongoose.Types.ObjectId },
                        descripcion: { type: String },
                        fecha: { type: String },
                        lugar: { type: String },
                        titulo: { type: String },
                        url: { type: String },
                        escurso: { type: Boolean },
                    }
        ] ,
        experiencia: [ 
            {
                id: { type: mongoose.Types.ObjectId },
                descripcion: { type: String },
                fecha: { type: String },
                lugar: { type: String },
                puesto: { type: String },
                url: { type: String },
            }
        ] ,
        skills: [ 
            {
                eshard: { type: Boolean },
                nombre: { type: String },
                nivel: { type: Number },
            }
        ]
    }
    ,
    {
        versionKey: false
    }   );

module.exports = mongoose.model('Persona', PersonaSchema); 