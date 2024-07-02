const e = require('express');
const morgan = require('morgan');

const app = e();
const tourRouter = require('./routes/tour.routes');
const userRouter = require('./routes/user.routes');

app.use(e.json());
app.use(morgan(`dev`));
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
