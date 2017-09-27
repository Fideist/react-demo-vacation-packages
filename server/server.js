var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var dotenv = require('dotenv');
dotenv.config();


var app = express();
var port = 8777;

var VacationsController = require('./controllers/VacationPackagesController')(app);
massive(process.env.DB_CONNECTION_STRING).then(db => {
  console.log('db is connected');
  app.set('db', db);
}).catch(err => {
  console.error(err);
})

app.use(cors());
app.use(bodyParser.json());

app.get('/vacations', VacationsController.read);
app.post('/vacations', VacationsController.create);
app.delete('/vacations/:id', VacationsController.delete);

app.listen(port, () => {
  console.log('listening on port', port)
});
