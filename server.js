const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', () => {
  console.log('UNCAUGHT EXCEPTION: 💥 Shutting down');
  console.log(err.name, err.message);
  process.exit();
});

dotenv.config({
  path: './config.env',
});

const app = require('./app');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose
  .connect(DB)
  .then(() => {
    console.log('MONGODB Connected');
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

console.log(`Environment: ${process.env.NODE_ENV}`);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION: 💥 Shutting down');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
