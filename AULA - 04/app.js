/****************************************************************************************************************************************************
* Objetivo: Calculadora
* Data: 11/08/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

//Importe da biblioteca de entrada de dados via teclado
var readline = require('readline')

//Cria o elemento de entrada de dados para digitação com usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada do primeiro número
entradaDeDados.question('Informe o primeiro número: ', function(numero1){

    let n1 = numero1.replace(",", ".")

    // Entrada da operação matemática
    entradaDeDados.question('Informe a operação (+) (-) (x) (/): ', function(resposta){
 
        let operacao = resposta

        // Entrada do segundo número
        entradaDeDados.question('Informe o segundo número: ', function(numero2){

            let n2 = numero2.replace(",", ".")

            let resultado

            if(operacao == '' || n1 == '' || n2 == '')

                console.log('ERRO: É necessário informar os números e a operação')

            else if(isNaN(n1) || isNaN(n2))

                console.log('ERRO: É necessário informar números')

            else {
                
                n1 = Number(n1)
                n2 = Number(n2)
    
                if(operacao == '+')
    
                    resultado = n1 + n2
    
                else if (operacao == '-'){
    
                    resultado = n1 - n2
    
                }
    
                else if (operacao == 'x')
    
                    resultado = n1 * n2
    
                else if (operacao == '/') {
    
                    if (n2 != 0)
    
                        resultado = n1 / n2
    
                    else 
    
                    console.log('ERRO: Não existe divisão por 0')
    
                }
    
                else{
    
                    console.log('ERRO: É necessário informar uma operação')
    
                }
    
                if (resultado != undefined){
    
                    console.log(`${n1} ${operacao} ${n2} = ${resultado}`)
    
                }

                entradaDeDados.close()

            }

        })

    })

})