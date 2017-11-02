const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;

const Users = db.users;
const Cards = db.cards;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));


app.post('/api/users', (req, res) => {
  let data = req.body;
  return Users.create({ username: data.username })
  .then(data => {
    res.json(data);
  })
})

app.get('/api/users', (req, res) => {
  return Users.findAll()
  .then(users => {
    res.json(users);
  })
})


app.post('/api/cards', (req, res) => {
  const data = req.body;
  return Cards.create({
    title: data.title,
    created_by: data.created_by,
    priorityId: data.priorityId,
    statusId: data.statusId,
    userId: data.userId
  })
  .then(data => {
    res.json(data);
  })
})



app.get('/api/cards', (req, res) => {
  return Cards.findAll()
  .then(cards => {
    res.json(cards);
  })
})


app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`)
});

