const express = require("express");
const usersController = require('./controllers/users');

const app = express();

app.use(express.static("public"));

app.use('/api', usersController);

app.listen(8001, function () {
  console.log("App started on port 8001");
});
