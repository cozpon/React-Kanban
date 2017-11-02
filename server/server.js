const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;




app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`)
});

