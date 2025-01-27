const express = require('express');
const router = express.Router();
const Food = require('../models/food.js'); // Import the Food model

// POST route to add a new food item
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newFood = new Food({ name, price, description });
    await newFood.save();
    res.status(201).json(newFood); // Return the created food
  } catch (error) {
    res.status(500).json({ message: 'Error adding food item', error });
  }
});


// GET route to fetch all food items
router.get('/', async (req, res) => {
    try {
      const foods = await Food.find(); // Retrieve all food items
      res.status(200).json(foods);
    } catch (error) {
      console.error('Error fetching food items:', error);
      res.status(500).json({ message: 'Error fetching food items', error });
    }
  });
  

module.exports = router;
