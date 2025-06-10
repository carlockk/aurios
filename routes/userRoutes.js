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
 *     summary: Iniciar sesión (obtener token JWT)
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
 *         description: Autenticación exitosa con token JWT
 */

/**
 * @swagger
 * /api/users/verifytoken:
 *   get:
 *     summary: Verificar token JWT (protegido)
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
 *     summary: Actualizar información de usuario (protegido)
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
 */

userRouter.post('/register', createUser);
userRouter.post('/login', login);
userRouter.get('/verifytoken', auth, verifyToken);
userRouter.get('/getAll', getAllUsers);
userRouter.put('/update', auth, updateUser);

module.exports = userRouter;
