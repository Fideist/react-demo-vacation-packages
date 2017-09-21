var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var data = require('./data');

var app = express();
var port = 8777;

app.use(cors());

app.get('/packages', (req, res) => {
  res.send(data.vacationPackages)
});

app.listen(port, () => {
  console.log('listening on port', port)
})
