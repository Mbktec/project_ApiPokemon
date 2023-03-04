const { pokemon, Pokemon } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.delete('/api/pokemons/:id', auth, (req, res) => {
      Pokemon.findByPk(req.params.id).then(pokemon => {
        const pokemonDeleted = pokemon;
        Pokemon.destroy({
          where: { id: pokemon.id }
        })
        .then(_ => {
          const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
          res.json({message, data: pokemonDeleted })
        })
      })
    })
  }