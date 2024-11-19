const express = require("express");
const usersController = require("./controllers/users");
const cors = require("cors");

const app = express();

app.use(express.static("public"));

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use("/api", usersController);

app.listen(8001, function () {
  console.log("App started on port 8001");
});
