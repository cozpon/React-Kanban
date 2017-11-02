const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require('./models');
const port = process.env.PORT || 4567;

const User = db.user;
const Task = db.task;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend : true }));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, function() {
  db.sequelize.sync({ force: true });
  console.log("SWERVER's UP" + `${port}`)
});

