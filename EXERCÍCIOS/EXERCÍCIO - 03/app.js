/****************************************************************************************************************************************************
* Objetivo: Realiza o calculo de tabuadas
* Data: 22/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var tabuadaApp = require('./model/montarTabuada')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe a tabuada inicial a ser calculada [2 - 100]: ', function(valorTabuadaInicial){

    let tabIni = valorTabuadaInicial

    entradaDeDados.question('Informe a tabuada final a ser calculada [2 - 100]: ', function(valorTabuadaFinal){

        let tabFin = valorTabuadaFinal

        entradaDeDados.question('Informe o número inicial da contagem da tabuada [1 - 50]: ', function(valorContagemInicial){

            let contIni = valorContagemInicial

            entradaDeDados.question('Informe o número final da contagem da tabuada [1 - 50]: ', function(valorContagemFinal){

                let contFin = valorContagemFinal

                tabuadaApp.tabuada(tabIni, tabFin, contIni, contFin)

            })

        })

    })

})