const express = require("express");
const userModel = require("./model");
const app = express();

app.get("/users", async (request, res) => {
    const users = await userModel.find({});
  
    try {
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.post("/add_user", async (req, res) => {
    const user = new userModel(req.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = app;