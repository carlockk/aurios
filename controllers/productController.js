
const Producto = require('../models/Producto');

// Crear nueva guitarra
exports.createGuitar = async (req, res) => {
  try {
    const nueva = new Producto({ ...req.body, usuario: req.user.id });
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las guitarras
exports.getAllGuitars = async (req, res) => {
  try {
    const guitarras = await Producto.find();
    res.json(guitarras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una guitarra por ID
exports.getGuitarById = async (req, res) => {
  try {
    const guitarra = await Producto.findById(req.params.id);
    if (!guitarra) return res.status(404).json({ error: 'No encontrada' });
    res.json(guitarra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar guitarra
exports.updateGuitar = async (req, res) => {
  try {
    const actualizada = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'No encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar guitarra
exports.deleteGuitar = async (req, res) => {
  try {
    const eliminada = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'No encontrada' });
    res.json({ message: 'Eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
