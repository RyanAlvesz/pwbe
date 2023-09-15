/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular IMC
* Data: 15/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
* Menor que 18,5 = Abaixo do peso
* Entre 18,5 e 24,9 = Peso Normal 
* Entre 25 e 29,9 = Acima do Peso (Sobrepeso)
* Entre 30 e 34,9 = Obesidade I
* Entre 35 e 39,9 = Obesidade II
* Maior que 40 = Obesidade III
****************************************************************************************************************************************************/


const calcularIMC = (valorAltura, valorPeso) => {

    let altura = String(valorAltura).replace(',', '.')
    let peso = String(valorPeso).replace(',', '.')
    let imc

    if(peso == '' || altura == '')
    console.log('ERRO: É a obrigatório a entrada de todos os valores')
    else if(isNaN(peso) || isNaN(altura))
    console.log('ERRO: É obrigatóro informar números')
    else{

        peso = Number(peso)
        altura = Number(altura)

        imc = peso / Math.pow(altura, 2)    
    }

    if(imc != undefined)
        return imc
    else
        return false
        
}

const verificarIMC = (valorIMC) => {

    let imc = valorIMC

    let grauPeso

    if(imc < 18.5)
        grauPeso = 'Abaixo do peso'
    else if(imc <= 24.9)
        grauPeso = 'Peso Normal'
    else if(imc <= 29.9)
        grauPeso = 'Acima do Peso (Sobrepeso)'
    else if(imc <= 34.9)
        grauPeso = 'Obesidade I'
    else if(imc <= 39.9)
        grauPeso = 'Obesidade II'
    else if(imc > 40)
        grauPeso = 'Obesidade III'

    return grauPeso

}

module.exports = {
    calcularIMC,
    verificarIMC
}