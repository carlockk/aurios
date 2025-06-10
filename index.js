const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

// 🔧 Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// Conexión a base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api/users', userRouter);
app.use('/api/product', productRouter);

// Inicializar el servidor
app.listen(process.env.PORT, () =>
  console.log('Servidor escuchando en el puerto ' + process.env.PORT)
);
