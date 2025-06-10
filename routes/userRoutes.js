const express = require('express');
const auth = require('../middleware/authorization');
const {
  createUser,
  login,
  verifyToken,
  getAllUsers,
  updateUser
} = require('../controllers/userController');

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Iniciar sesión (retorna token JWT)
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token generado
 */

/**
 * @swagger
 * /api/users/verifytoken:
 *   get:
 *     summary: Verificar token JWT
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 */

/**
 * @swagger
 * /api/users/getAll:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

/**
 * @swagger
 * /api/users/update:
 *   put:
 *     summary: Actualizar datos del usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado

 // userRoutes.js - Agregar documentación Swagger y ruta

/**
 * @swagger
 * /api/users/delete:
 *   delete:
 *     summary: Eliminar el usuario actual
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */

userRouter.post('/register', createUser);
userRouter.post('/login', login);
userRouter.get('/verifytoken', auth, verifyToken);
userRouter.get('/getAll', getAllUsers);
userRouter.put('/update', auth, updateUser);
// agregado usuario eliminado se me habia olvidado
userRouter.delete('/delete', auth, deleteUser);

module.exports = userRouter;
