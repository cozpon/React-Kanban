const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;

const Users = db.User;
const Cards = db.Card;
const Priorities = db.Priority;
const Status = db.Status;

app.use(function (req, res, next) { // allowing front end to talk to back end
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
  .then(data => {       // not sure if this works, but basic concept is there
    res.json(data);
  });
});

app.post('/api/cards/', (req, res) => {
  const data = req.body;
  return Cards.create({
    title: data.title,
    created_by: data.created_by,        // using Sequelize .create
    priorityId: data.priorityId,        // taking data from front end and
    statusId: data.statusId,            // pushing it to back end DB
    assigned_to: data.assigned_to
  })
  .then(card => {
    return card.reload({
      include: [
        { model: Users, as: 'Creator' },      // giving alias's to foreign keys
        { model: Users, as: 'Dev' },
        { model: Priorities, as: 'Priority' },  // this way you can directly address them
        { model: Status, as: 'Status' }
      ]   // upon "RELOAD" you have to then 'include' the cards again so your FK's can have their "associations"
    })
    res.json(card);
  })
  .then(card => {
    return res.json(card);
  });
});

app.get('/api/priorities', (req, res) => {
  return Priorities.findAll()
  .then(priorities => { // "getting" the priorities so that they can display in dropdown menu
    return res.json(priorities);
  })
})

app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`);
});


//use different routing to get different results, /user/cards will give all cards associated with that single user

app.get('/api/cards', (req, res) => {
  return Cards.findAll({
    include: [
      { model: Users, as: 'Creator' },
      { model: Users, as: 'Dev' },
      { model: Priorities, as: 'Priority' },
      { model: Status, as: 'Status' }
    ]
  })
  .then(cards => {
    return res.json(cards);
  });
});


app.get('/api/users', (req, res) => {
  return Users.findAll({
    include: [                        // for later when clicking on a User will display the cards
      { model: Cards, as: "Cards" },  // that belong to that individual user
      { model: Cards, as: "Tasks" }
    ]
  })
  .then(users => {
      return res.json(users);
    });
});