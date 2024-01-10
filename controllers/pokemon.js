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

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.json(Pokemon.getOne(id))
})

module.exports = router;
