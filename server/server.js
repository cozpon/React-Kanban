const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;

const Users = db.User;
const Cards = db.Card;
const Priorities = db.Priority;
const Status = db.Status;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));


app.post('/api/users', (req, res) => {
  let data = req.body;
  return Users.create({ username: data.username })
  .then(data => {
    res.json(data);
  })
})

app.post('/api/cards', (req, res) => {
  const data = req.body;
  return Cards.create({
    title: data.title,
    created_by: data.created_by,
    priorityId: data.priorityId,
    statusId: data.statusId,
    assigned_to: data.assigned_to
  })
  .then(data => {
    res.json(data);
  })
})

app.get('/api/priorities', (req, res) => {
  return Priorities.findAll()
  .then(priorities => {
    return res.json(priorities);
  })
})

app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`)
});


//use different routing to get different results, /user/cards will give all cards associated with that single user

app.get('/api/cards', (req, res) => {
  return Cards.findAll({
    include: [
      { model: Users, as: 'Creator' },
      { model: Users, as: 'Dev' },
      { model: Priorities, as: 'Priority'},
      { model: Status, as: 'Status'}
    ]
  })
  .then(cards => {
    return res.json(cards)
  })
})


app.get('/api/users', (req, res) => {
  return Users.findAll({
    include: [
      { model: Cards, as: "Cards" },
      { model: Cards, as: "Tasks" }
    ]
  })
  .then(users => {
      return res.json(users)
    })
})