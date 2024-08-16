const Guitarra = require('../models/Guitarra');

exports.getAllGuitars = async (req, res) => {
    try {
        const guitarras = await Guitarra.find({});
        res.json({guitarras}) 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener las guitarras",
            error
        })
    }
}

exports.createGuitar = async(req, res) => {
    const { nombre, precio } = req.body
    try {
        const nuevaGuitarra = await Guitarra.create({ nombre, precio })
        res.json(nuevaGuitarra)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando la guitarra",
            error: error.message
        })
    }
}

exports. updateGuitarById = async (req, res) => {
    const { id, nombre, precio } = req.body
    try {
        const actualizacionGuitarra = 
	        await Guitarra.findByIdAndUpdate(id, { nombre, precio }, { new: true })
        res.json(actualizacionGuitarra)
    } catch (error) {       
        res.status(500).json({
            msg: "Hubo un error actualizando la guitarra",
            error
        })
    }
}

exports.deleteGuitarById = async (req, res) => {
    const { id } = req.body
    try {
        const guitarraBorrada = await Guitarra.findByIdAndDelete({_id: id })
        res.json(guitarraBorrada)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error eliminando la guitarra",
            error
        })
    }
}