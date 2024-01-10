const originalPokemon = require("./pokedex.json");

const pokemon = originalPokemon.pokemon.map((p) => {
  // given p = the original pokemon
  return {
    name: p.name,
    num: p.num,
    img: p.img,
    type: p.type,
  };
});

const Pokemon = {
    getAll: () => {return pokemon},
    getOne: (id) => {return pokemon[id]},
    createOne: (newPoke) => {
        pokemon.push(newPoke)
    },
    update: (id, updatedPoke) => {
        pokemon[id] = updatedPoke
    },
    delete: (id) => {
        pokemon.splice(id, 1)
    }
}

module.exports = Pokemon
