const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')


const app = express()
const port = 3000


app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(express.json())

 
sequelize.initOb()
//nous placerons nos future point de terminaison.
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon') (app)
require('./src/routes/deletePokemon') (app)
require('./src/routes/login')(app)

//on ajoute la gestion des erreurs 404
app.use(({res}) => {
    const message = `Impossible de trouver la ressource demandé ! Vous pouvez essayer une autre URL.`
    res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur: http://localhost:${port}`))