
const { Pokemon } = require('../db/sequelize')
const auth = require('../auth/auth')
module.exports = (app) => {
    app.get('/api/pokemons', auth, (req, res) => {
       Pokemon.findAll()
       .then(pokemons => {
        const message = ' la liste des pokémons abien été récupérée'
        res.json({message, data: pokemons})
       })
       .catch(error => {
        const message = 'La liste des pokemons n\'a pas pu être récupérée. Réessayez dans quelques instants'
        res.status(500).json({message, data:error})
       })
    })
}