const prompt = require('prompt-sync')();
const { Propriedade } = require('../model/Propriedades.js')

const propriedades = new Propriedade()

do {
    var opcao = prompt('Qual propriedade deseja inserir?');
    if (opcao.toLocaleUpperCase() != "SAIR") {
        propriedades.addPropriedade(opcao)
    }
} while (opcao.toLocaleUpperCase() != "SAIR")

const listaPropriedadeOrdenada = propriedades.ordenarPropriedades();

listaPropriedadeOrdenada.forEach(propriedade => {
    console.log(propriedade)
});