const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');
const drinkRoutes = require('./routes/drinksRoutes');
const brunchRoutes = require('./routes/brunchRoutes');

const app = express();
// CORS options to allow multiple origins (http://localhost:5173 and http://localhost:5174)
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both frontend ports
  methods: ['GET', 'POST'],
  credentials: true
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

app.use(bodyParser.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error:', error));

// Routes
app.use('/api/foods', foodRoutes);
app.use('/api/drinks', drinkRoutes);
app.use('/api/brunches', brunchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
