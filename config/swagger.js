const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aurios API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://auriosback-production.up.railway.app',
        description: 'Producción (Railway)'
      },
      {
        url: 'http://localhost:3001',
        description: 'Desarrollo local'
      }
    ],
    tags: [
      { name: 'Usuarios', description: 'Operaciones de usuarios' },
      { name: 'Productos', description: 'Operaciones de productos' }
    ],
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJSDoc(options);
