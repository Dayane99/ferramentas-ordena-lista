const prompt = require('prompt-sync')();
const { Propriedade } = require('../model/Propriedades.js');
const { Validacao } = require('./Validacao.js');

const propriedades = new Propriedade()

do {
    var opcao = prompt('Digite a propriedade que deseja inserir; Para imprimir digite "sair"');
    if (opcao.toLocaleUpperCase() != "SAIR") {
        if (Validacao.validarEntrada(opcao)) {
            propriedades.addPropriedade(opcao)
            console.log("Propriedade adicionada a lista com sucesso")
        } else {
            console.log(`a opção "${opcao}" não é valida, insira um valor valido`)
        }
    }
} while (opcao.toLocaleUpperCase() != "SAIR")

const listaPropriedadeOrdenada = propriedades.ordenarPropriedades();

if (propriedades.listaPropriedades.length > 0) {
    propriedades.imprimirPropriedades(listaPropriedadeOrdenada)
} else {
    console.log("Você não inseriu nenhuma propriedade")
}
