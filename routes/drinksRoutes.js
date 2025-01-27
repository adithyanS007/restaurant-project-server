const express = require('express');
const router = express.Router();
const Drink = require('../models/drinks.js'); // Import the Drink model

// POST route to add a new drink item
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newDrink = new Drink({ name, price, description });
    await newDrink.save();
    res.status(201).json(newDrink); // Return the created drink
  } catch (error) {
    res.status(500).json({ message: 'Error adding drink item', error });
  }
});


// GET route to fetch all drink items
router.get('/', async (req, res) => {
  try {
    const drinks = await Drink.find(); // Retrieve all drink items
    res.status(200).json(drinks);
  } catch (error) {
    console.error('Error fetching drinks items:', error);
    res.status(500).json({ message: 'Error fetching drink items', error });
  }
});

module.exports = router;
