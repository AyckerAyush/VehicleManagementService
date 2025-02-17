const express = require('express');
const Vehicle = require('../models/vehicle');
const router = express.Router();

// POST route to add a new vehicle
router.post('/vehicles', async (req, res) => {
  try {
    const { isBooked, remainingDistance, owner, BookedBy, bookedDistance, perKMPrice, totalDue } = req.body;

    // Create a new vehicle entry in the database
    const newVehicle = await Vehicle.create({
      isBooked,
      remainingDistance,
      owner,
      BookedBy,
      bookedDistance,
      perKMPrice,
      totalDue, // Add totalDue to the database entry
    });

    // Send back the newly created vehicle
    res.status(201).json(newVehicle);
  } catch (error) {
    console.error('Error adding vehicle:', error);
    res.status(500).json({ message: 'Error adding vehicle', error });
  }
});


// GET /api/vehicles - Fetch all vehicles
router.get('/vehicles', async (req, res) => {
    try {
      const vehicles = await Vehicle.findAll();  // Get all vehicles from the database
      res.status(200).json(vehicles);  // Send the vehicles as JSON
    } catch (error) {
      console.error('Error fetching vehicles:', error.message);
      res.status(500).json({ message: 'Error fetching vehicles', error: error.message });
    }
  });
  router.get('/', async (req, res) => {
    try {
      const vehicles = await Vehicle.findAll();  // Get all vehicles from the database
      res.status(200).json(vehicles);  // Send the vehicles as JSON
    } catch (error) {
      console.error('Error fetching vehicles:', error.message);
      res.status(500).json({ message: 'Error fetching vehicles', error: error.message });
    }
  });
  

module.exports = router;
