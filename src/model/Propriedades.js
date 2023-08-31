class Propriedade {
    constructor() {
        this.listaPropriedades = []
    }

    addPropriedade(propriedade) {
        this.listaPropriedades.push(propriedade)
    }

    ordenarPropriedades() {
        return this.listaPropriedades.sort()
    }

}
module.exports = { Propriedade }

