const swaggerJSDoc = require('swagger-jsdoc');

const options = {
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
        description: 'Producción (Railway)',
      },
      {
        url: 'http://localhost:3001',
        description: 'Desarrollo local',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJSDoc(options);
