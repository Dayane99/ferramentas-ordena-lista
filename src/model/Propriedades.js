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

    imprimirPropriedades(listaPropriedades) {
        listaPropriedades.forEach(item => {
            console.log(item)
        });
    }

}
module.exports = { Propriedade }

