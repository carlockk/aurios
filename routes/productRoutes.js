const express = require('express');
const auth = require('../middleware/authorization');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * /api/product/create:
 *   post:
 *     summary: Crear un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - precio
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */

/**
 * @swagger
 * /api/product/readall:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */

/**
 * @swagger
 * /api/product/readone/{id}:
 *   get:
 *     summary: Obtener producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 */

/**
 * @swagger
 * /api/product/update/{id}:
 *   put:
 *     summary: Actualizar producto por ID
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 */

/**
 * @swagger
 * /api/product/delete/{id}:
 *   delete:
 *     summary: Eliminar producto por ID
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Producto eliminado
 */

router.post('/create', auth, createProduct);
router.get('/readall', getAllProducts);
router.get('/readone/:id', getProductById);
router.put('/update/:id', auth, updateProduct);
router.delete('/delete/:id', auth, deleteProduct);

module.exports = router;
