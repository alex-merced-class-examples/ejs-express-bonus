// import express
const express = require("express");
// create an express router
const router = express.Router();
// Import Models Needed in Routes
const Pokemon = require("../models/Pokemon");
const authMiddleware = require("./authMiddleware")
const v = require("express-validator")




// index route
router.get("/", v.query("cheese").notEmpty(), authMiddleware, async (req, res) => {

    const result = v.validationResult(req)

    console.log(result)

    const pokemon = await Pokemon.find({username: req.session.username})

    res.render("pokemon/index.ejs", {pokemon})
})

router.get("/:id", authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id)
    res.json(await Pokemon.findById(id))
})

module.exports = router;
