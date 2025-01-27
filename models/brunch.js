const mongoose = require('mongoose');

// Schema for brunch items
const brunchSchema = new mongoose.Schema({
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

const Brunch = mongoose.model('Brunch', brunchSchema);
module.exports = Brunch;
