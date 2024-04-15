// cat.js

const mongoose = require('mongoose');

// Define the Cat schema
const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  color: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Cat model based on the schema
const Cat = mongoose.model('Cat', catSchema);

// Export the Cat model
module.exports = Cat;
