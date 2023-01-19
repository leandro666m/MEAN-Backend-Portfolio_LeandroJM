//  *                            /controllers/personaController.js
const Persona = require("../models/Persona");

//req POST
/* exports.crearPersona = async (req, res) => {
    console.log("PersonaController: crearPersona : ", req.body);
    try {
        //Creamos nuestra persona
        let persona = new Persona(req.body);

        await persona.save();
        res.send(persona);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear.');
    }
}
*/


//req GET  router.get('/getPersona'
exports.getPersona = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar.');
    }
}


//req PUT   router.put('/editar/:id'
exports.editarPersona = async (req, res) => {
    try {
        const {nombre } = req.body;
        let persona = await Persona.findById(req.params.id);

        if ( !persona ){
            res.status(404).json( { msg: 'No existe la persona.'})
        }

        persona.nombre = nombre;

        /*await persona.save();
        res.json(persona);*/
        persona = await Persona.findOneAndUpdate( { id: req.params.id }, persona, { new: true} );
        res.json(persona);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar.');
    }
} 

//req GET   /:id
/* exports.obtenerPersona = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if ( !producto ){
            res.status(404).json( { msg: 'No existe el producto.'})
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar.');
    }
} 
*/


//req DELETE   /:id
/* exports.eliminarPersona = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if ( !producto ){
            res.status(404).json( { msg: 'No existe el producto.'})
        }

        await Producto.findOneAndRemove( {_id: req.params.id} );
        res.json( {msg: 'Porducto eliminado'} );

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar.');
    }
} */