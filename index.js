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

connectDB();

app.use(cors());
app.use(express.json());

// ✅ Swagger debe estar antes de las rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);

app.listen(process.env.PORT, () =>
  console.log('Servidor escuchando en el puerto ' + process.env.PORT)
);
