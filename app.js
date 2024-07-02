const fs = require('fs');
const express = require('express');

const port = 3000;
const app = express();

app.use(express.json());

const toursJSONPath = `${__dirname}/dev-data/data/tours-simple.json`;

let tours = JSON.parse(fs.readFileSync(toursJSONPath, 'utf-8'));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
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
});

app.post('/api/v1/tours', (req, res) => {
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
});

app.patch('/api/v1/tours/:id', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
