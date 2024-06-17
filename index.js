const express = require('express');
const app = express();
require('dotenv').config();
const dataRoutes = require('./routes/dataRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerConfig');

const PORT = process.env.PORT || 3000;


app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Use data routes
app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
