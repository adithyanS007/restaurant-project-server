const mongoose = require('mongoose');

// Schema for food items
const foodSchema = new mongoose.Schema({
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

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
