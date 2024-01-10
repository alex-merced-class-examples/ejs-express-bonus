// import express
const express = require("express");
// create an express router
const router = express.Router();
// Import Models Needed in Routes
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

router.get("/forms", (req, res) => {
  res.render("user/forms.ejs");
});

router.get("/checkusers", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post("/signup", async (req, res) => {
  try {
    //hash the password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );
    // create the user
    const user = await User.create(req.body);
    // redirect
    res.redirect("/auth/forms");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    // get the username and password
    const { username, password } = req.body;
    // pull the user from the database
    const user = await User.findOne({ username });
    // does the user exist
    if (!user) {
      throw new Error("User Does Not Exist");
    }
    // check if the password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Password does not match");
    }
    // update the session object
    req.session.loggedIn = true;
    req.session.username = username;
    // redirect them to pokemon
    res.redirect("/pokemon");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

module.exports = router;
