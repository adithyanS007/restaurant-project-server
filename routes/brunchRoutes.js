const express = require('express');
const router = express.Router();
const Brunch = require('../models/brunch.js'); // Import the Brunch model

// POST route to add a new brunch item
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newBrunch = new Brunch({ name, price, description });
    await newBrunch.save();
    res.status(201).json(newBrunch); // Return the created brunch
  } catch (error) {
    res.status(500).json({ message: 'Error adding brunch item', error });
  }
});


// GET route to fetch all brunch items
router.get('/', async (req, res) => {
    try {
      const brunches = await Brunch.find(); // Retrieve all brunch items
      res.status(200).json(brunches);
    } catch (error) {
      console.error('Error fetching brunch items:', error);
      res.status(500).json({ message: 'Error fetching brunch items', error });
    }
  });

module.exports = router;
