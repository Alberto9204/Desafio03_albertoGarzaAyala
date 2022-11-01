const express = require('express')
const routeProducts = require('./routes/productRoutes')
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use('/api/products', routeProducts)

function onInit (){
    console.log('Iniciando app..')
}

try {
    app.listen(PORT)
    console.log(`Server on port ${PORT}...`)
} catch (err) {
    console.log('Error de conexion con el servidor...', err)
}

onInit()