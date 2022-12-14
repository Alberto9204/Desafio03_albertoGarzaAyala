const express = require('express')
const Contenedor = require('./Contenedor')

const app = express()
const productos = new Contenedor('productos.txt')

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
    res.send(prods)
})

app.get('/productosRandom', async (req, res) => {
    const prods = await productos.getAll()
    const randomId = parseInt(Math.random() * prods.length)
    console.log(randomId)
    res.send(prods[randomId])
})
