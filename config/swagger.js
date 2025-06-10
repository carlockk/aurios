const swaggerJsdoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aurios API',
      version: '1.0.0',
      description: 'Documentación interactiva de la API de usuarios y productos con JWT',
    },
    servers: [
      {
        url: 'https://auriosback-production.up.railway.app',
        description: 'Servidor en producción',
      },
      {
        url: 'http://localhost:3001',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
});

module.exports = swaggerSpec;
