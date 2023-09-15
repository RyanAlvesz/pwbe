/****************************************************************************************************************************************************
* Objetivo: Realiza o calculo do IMC e informa o grau do peso
* Data: 15/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var calculoIMC = require('./model/calculoIMC')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe a sua altura em metros: ', function(valorAltura){

    let altura = valorAltura

    entradaDeDados.question('Informe a peso: ', function(valorPeso){

        let peso = valorPeso

        let imc = calculoIMC.calcularIMC(altura, peso)
        let grauPeso
        
        if (imc){
            grauPeso = calculoIMC.verificarIMC(imc)
            console.log(`IMC: ${String(imc.toFixed(2).replace('.', ','))} - ${grauPeso}`)
        }
                
        entradaDeDados.close()
        
    })
    
})
