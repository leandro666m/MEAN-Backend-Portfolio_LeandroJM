//  *                            /controllers/personaController.js
const Persona = require("../models/Persona");

//req POST
exports.crearPersona = async (req, res) => {
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

//req GET
exports.obtenerPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar.');
    }
}

//req GET   /:id
exports.obtenerPersona = async (req, res) => {
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

//req PUT   /:id
exports.actualizarPersona = async (req, res) => {
    try {
        const {nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if ( !producto ){
            res.status(404).json( { msg: 'No existe el producto.'})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate( { _id: req.params.id }, producto, { new: true} );
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar.');
    }
} 

//req DELETE   /:id
exports.eliminarPersona = async (req, res) => {
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
} 