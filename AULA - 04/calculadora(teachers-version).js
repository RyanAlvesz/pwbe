/****************************************************************************************************************************************************
* Objetivo: Calculadora
* Data: 18/08/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

// Importe da biblioteca para entrada de dados
var readline = require('readline')

// Importe da biblioteca Cálculos Matemáticos
var calculosMatematicos = require('./model/calculosMatematicos.js')

// Criando o objeto para manipular as entradas do usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function(numero1){

    let valor1 = numero1.replace(',', '.')

    // Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function(numero2){

        let valor2 = numero2.replace(',', '.')

        // Entrada de dados para escolher a operação matemática
        entradaDeDados.question('Digite a operação [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: ', function(resposta){

            // Convertendo a resposta para maiúsculo
            let operacao = resposta.toUpperCase()

            let resultado

            if(valor1 == '' || valor2 == '' || isNaN(valor1) || isNaN(valor2))

                console.log('ERRO: É obrigatório informar um número')

            else{

                //Conversão de String para número
                valor1 = Number(valor1)
                valor2 = Number(valor2)             

                resultado = calculosMatematicos.calculadora(valor1, valor2, operacao)
                
                if(resultado)
                    console.log(resultado)

                entradaDeDados.close()

            }

        })

    })

})