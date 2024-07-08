const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env',
});

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => {
  console.log('MONGODB Connected');
});

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

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
