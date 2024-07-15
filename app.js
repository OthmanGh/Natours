const e = require('express');
const morgan = require('morgan');

const app = e();
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');

app.use(e.json());
if (process.env.NODE_ENV === 'development') app.use(morgan(`dev`));
app.use(e.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on server`,
  });
});

module.exports = app;
