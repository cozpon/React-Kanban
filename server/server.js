const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;

const users = db.users;
const cards = db.cards;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

app.post('/api/users', (req, res) => {
  const data = req.body;
  return users.create({ username: data.username })
  .then(data => {
    res.json(data);
  })
})


app.post('/api/cards', (req, res) => {
  const data = req.body;
  return cards.create({
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

app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`)
});

