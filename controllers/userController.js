const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Crear usuario
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validación
  if (!email || !password) {
    return res.status(400).json({ msg: "Mail y password son obligatorios" });
  }

  try {
    // Verifica si ya existe un usuario con ese email
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ msg: "Ya existe un usuario con ese email" });
    }

    // Encriptar contraseña
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Crear usuario
    const nuevoUsuario = await Usuario.create({
      username,
      email,
      password: hashedPassword
    });

    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al registrar el usuario" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // obligar a isertar datoa
  if (!email || !password) {
    return res.status(400).json({ msg: "Email y contraseña son obligatorios" });
  }

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Email o contraseña incorrectos" });
    }

    const payload = { user: { id: usuario.id } };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 3600 },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al iniciar sesión" });
  }
};

// Verificar token
exports.verifyToken = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.user.id).select('-password');
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    res.json({ usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al verificar token" });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Usuario.find().select('-password');
    res.json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener los usuarios" });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const updated = await Usuario.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al actualizar el usuario" });
  }
};

// Eliminar usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Usuario.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al eliminar el usuario" });
  }
};

