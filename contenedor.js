const {promises: fs} = require ('fs')

class Contenedor {
    constructor(route) {
        this.route = route
    }
    async getAll(){
        try {
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            return content
        } catch (error) {
            console.log(error)
            return []
        }
    }
}

module.exports = Contenedor