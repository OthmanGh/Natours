const e = require('express');
const morgan = require('morgan');

const app = e();
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

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
  next(new AppError(`Can't find ${req.originalUrl} on server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
