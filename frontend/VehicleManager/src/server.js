const express = require('express');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicle'); // Include the vehicle routes
const sequelize = require('./config/database'); // Sequelize DB connection

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API route to add vehicles
app.use('/api', vehicleRoutes);

// Sync the database before starting the server
sequelize.sync({ force: false })  // Set to true for resetting the DB (dev purposes only)
  .then(() => {
    app.listen(3001, () => {
      console.log('Server is running on http://localhost:3001');
    });
  })
  .catch((err) => console.log('Error syncing database: ', err));
