const mongoose = require('mongoose');

// Schema for drinks items
const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;
