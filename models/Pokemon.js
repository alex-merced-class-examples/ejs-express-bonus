// THIS IS A SAMPLE MODEL FILE

// Import Connection
const mongoose = require("./connection");

// Create a Schema
const pokemonSchema = new mongoose.Schema(
  {
    name: String,
    img: String,
    username: String
  },
  { timestamps: true }
);

// Create the Model Object
const Pokemon = mongoose.model("Pokemon", pokemonSchema)

// export the Model
module.exports = Pokemon
