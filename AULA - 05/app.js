/****************************************************************************************************************************************************
* Objetivo: Ajustar preço com base em um código 
* Data: 18/08/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

// Opções de Códigos
// Código 1 - À vista, com 8% de desconto
// Código 2 - À vista, com 4% de desconto
// Código 3 - Em 2x, preço normal sem juros
// Código 4 - Em 4x, preço ascrescido de 8%

var readline = require('readline')
var calculoDesconto = require('./model/calculoValor')

//Cria o elemento de entrada de dados para digitação com usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe o valor da venda: ', function(valorVenda){

    let valor = valorVenda.replace(",", ".")

    entradaDeDados.question('Informe o código [1 - 2 - 3 - 4]: ', function(codigoResposta){

        let codigo = codigoResposta

        if (valor == '' || codigo == '')

            console.log('ERRO: É necessário informar um valor ou um código válido')

        else if (isNaN(codigo))

            console.log('ERRO: O código é um NÚMERO entre 1 e 4')

        else if (Number(codigo) > 4 || Number(codigo) < 1)

            console.log('ERRO: É necessário informar um código entre 1 e 4')

        else if (isNaN(valor))

            console.log('ERRO: É necessário informar um valor válido')

        else{

            valor = Number(valor)
            codigo = Number(codigo)

            let resposta =  calculoDesconto.calcular(valor, codigo)

            console.log(resposta)

            entradaDeDados.close()

        }
    
    })

})