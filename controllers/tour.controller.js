const Tour = require('../models/tour.model');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    requestedAt: req.requestedTime,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const { id } = req.params;
  // const tour = tours.find((tour) => tour.id === Number(id));

  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

exports.createTour = (req, res) => {
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(toursJSONPath, JSON.stringify(tours), 'utf-8', (err) => {
  //   if (err) {
  //     res.status(500).json({
  //       status: 'error',
  //       message: 'Failed to write to tours file',
  //     });
  //   } else {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   }
  // });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour.../>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
