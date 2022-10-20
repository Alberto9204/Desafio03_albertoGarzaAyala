
const { promises: fs} = require ('fs')

class Contenedor {
    constructor(route){
        this.route = route
    }

    async getAll(){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            console.log(content)
        }catch(err){
            console.log(err)
        }
    }
 

}

module.exports = Contenedor

const ruta = new Contenedor ('productos.txt')
ruta.getAll()

