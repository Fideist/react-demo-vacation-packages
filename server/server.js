var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var data = require('./data');

var app = express();
var port = 8777;

app.use(cors());
app.use(bodyParser.json());

app.get('/packages', (req, res, next) => {
  res.send(data.vacationPackages)
});

app.post('/packages', (req, res) => {
  data.vacationPackages.push(req.body);
  res.send(data.vacationPackages);
});

app.delete('/packages/:index', (req, res) => {
  data.vacationPackages.splice(req.params.index, 1);
  res.send(data.vacationPackages);
});

app.listen(port, () => {
  console.log('listening on port', port)
});
