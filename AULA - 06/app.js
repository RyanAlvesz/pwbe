/****************************************************************************************************************************************************
* Objetivo: Realizar o cálculo de uma determinada tabuada
* Data: 01/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var calculoTabuada = require('./model/calculoTabuada')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada: ', function(valorTabuada){

    let tabuada = valorTabuada

    entradaDeDados.question('Digite o contador Inicial: ', function(valorInicial){
        
        let inicial = valorInicial

        entradaDeDados.question('Digite o contado Final: ', function(valorFinal){

            let final = valorFinal

            console.log(calculoTabuada.calcularTabuada(tabuada, inicial, final))

        })

    })

})