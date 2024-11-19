const express = require("express");
const router = express.Router();
const User = require("../models/users");

// curl -X GET http://localhost:8001/api/users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// curl -X GET http://localhost:8001/api/users/1
router.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
