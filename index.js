const express = require('express');
const app = express();
require('dotenv').config();
const dataRoutes = require('./routes/dataRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use data routes
app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
