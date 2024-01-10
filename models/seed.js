// SEED FILE - FOR ONE OFF DATABASE OPERATIONS
// RUN THIS FILE WITH "npm run seed"

// Import Connection
const mongoose = require("./connection.js");

// Import Models
const Pokemon = require("./Pokemon.js")
const pokedex = require("./pokedex.json")

// Delay Seed Code Till Connection Opens with Connection Event
mongoose.connection.on("open", async () => {
  // seed code should be inside this function

  const pokemonToCreate = pokedex.pokemon.map((p) => {
    return {
      name: p.name,
      img: p.img,
      username: "user1"
    }
  })

  const createdPokemon = await Pokemon.create(pokemonToCreate)

  

  // log to confirm it was created
  console.log(createdPokemon[0])
});
