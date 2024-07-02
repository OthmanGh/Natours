import e from 'express';

const app = e();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from server side get method',
    app: 'Natours',
  });
});

app.post('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from server side post method',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
