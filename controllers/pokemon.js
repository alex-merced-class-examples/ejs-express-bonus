// import express
const express = require("express");
// create an express router
const router = express.Router();
// Import Models Needed in Routes
const Pokemon = require("../models/Pokemon");

// index route
router.get("/", (req, res) => {

    const pokemon = Pokemon.getAll()

    res.render("pokemon/index.ejs", {pokemon})
})

module.exports = router;
