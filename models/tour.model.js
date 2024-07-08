const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is required'],
    unique: true,
  },

  price: {
    type: Number,
    required: [true, 'A tour price is required'],
  },

  rate: {
    type: Number,
    default: 4.5,
  },
});

const Tour = new mongoose.model('Tour', tourSchema);

module.exports = Tour;
