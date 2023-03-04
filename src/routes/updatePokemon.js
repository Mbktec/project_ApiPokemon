const { Pokemon } = require('../db/sequelize')
const auth = require('../auth/auth')

// module.exports = (app) => {
//     app.put('/api/pokemons/:id', (req, res) => {
//         const id = req.params.id
//         Pokemon.update(req.body, {
//             where: {
//                 id: id
//             }
//         })
//         .then(_ => {
//             Pokemon.findByPk(id).then(pokemon => {
//                 if(pokemon === null){
//                   const message = `Le pokemon demandé n \'existe pas. Réessayes avec un qutre instants.`   
//                   return res.status(404).json({message})
//                 }
//                 const message =`Le pokemon ${pokemon.name} a bien été modifié.`
//                 res.json({message, data: pokemon})
//             })
//             .catch(error => {
//                 const message = 'La liste des pokemons n\'a pas pu modifié . Réessayez dans quelques instants'
//                 res.status(500).json({message, data:error})
//                })
//         })
//         .catch(error => {
//             const message = 'La liste des pokemons n\'a pas pu être modifié. Réessayez dans quelques instants'
//             res.status(500).json({message, data:error})
//            })
//     })
// }
module.exports = (app) => {
    app.put('/api/pokemons/:id', auth, (req, res) => {
      const id = req.params.id
      Pokemon.update(req.body, {
        where: { id: id }
      })
      .then(_ => {
        Pokemon.findByPk(id).then(pokemon => {
          const message = `Le pokémon ${pokemon.name} a bien été modifié.`
          res.json({message, data: pokemon })
        })
      })
    })
  }