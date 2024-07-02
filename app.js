const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

const toursJSONPath = `${__dirname}/dev-data/data/tours-simple.json`;
const tours = JSON.parse(fs.readFileSync(toursJSONPath, 'utf-8'));

app.use(express.json());
app.use(morgan(`dev`));
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

// Tours
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    requestedAt: req.requestedTime,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((tour) => tour.id === Number(id));

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(toursJSONPath, JSON.stringify(tours), 'utf-8', (err) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to write to tours file',
      });
    } else {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  });
};

const updateTour = (req, res) => {
  if (!req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour.../>',
    },
  });
};

const deleteTour = (req, res) => {
  if (!req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// Users
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
