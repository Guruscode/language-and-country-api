const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Language and Country API',
      version: '1.0.0',
      description: 'API for fetching languages and countries using data from the RestCountries API',
    },
  },
  apis: ['./api/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;
