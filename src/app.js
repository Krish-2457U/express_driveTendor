const express = require('express');
const app = express(); // Instance of Express application

app.get('/users', (req, res) => {
  console.log({ ...req.params });
  res.send({ firstName: 'Krishna', lastName: 'Kumar'});
});


app.get('/users/:id', (req, res) => {
 console.log({ ...req.params });
  res.send({ firstName: 'Krishna', lastName: 'Kumar'});
});


app.get('/users/:id/:name', (req, res) => {
  console.log({ ...req.params });
  res.send({ firstName: 'Krishna', lastName: 'Kumar'});
});


app.get('/users/:id/:name/:password', (req, res) => {
  console.log({ ...req.params });
  res.send({ firstName: 'Krishna', lastName: 'Kumar'});
});



app.listen(8888, () => {
  console.log('Server is running on port 8888');
}); // Start the server on port 3000

