const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is required'],
    unique: true,
    trim: true,
  },

  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a max group size'],
  },

  difficulty: {
    type: String,
    require: [true, 'A tour must have a difficulty'],
  },

  ratingAverage: {
    type: Number,
    default: 4.5,
  },

  ratingsQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },

  priceDiscount: Number,

  summary: {
    type: String,
    required: [true, 'A tour must have a summary'],
    trim: true,
  },

  rate: {
    type: Number,
    default: 4.5,
  },

  description: {
    type: String,
    trim: true,
  },

  imageCover: {
    type: String,
    require: [true, 'A tour must have an image cover'],
  },

  images: [String],

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  startDates: [Date],
});

const Tour = new mongoose.model('Tour', tourSchema);

module.exports = Tour;
