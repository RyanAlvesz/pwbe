/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular tabuada
* Data: 22/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

const criarTabuada = (valorTabuada, numeroInicial, numeroFinal) => {

    let tabuada = valorTabuada
    let nI = numeroInicial
    let nF = numeroFinal

    console.log('')
    console.log(`Tabuada do [${tabuada}]`)

    while(nI <= nF){

        let resultadoTabuada = tabuada * nI
        console.log(`${tabuada} x ${nI} = ${resultadoTabuada}`)
        nI++

    }

    return true

}

const tabuada = (valorTabuadaInicial, valorTabuadaFinal, valorNumeroInicial, valorNumeroFinal) => {

    let tabuadaInicial = String(valorTabuadaInicial).replace(',', '.')
    let tabuadaFinal = String(valorTabuadaFinal).replace(',', '.')
    let numeroInicial = String(valorNumeroInicial).replace(',', '.')
    let numeroFinal = String(valorNumeroFinal).replace(',', '.')

    if(Number(numeroFinal) < Number(numeroInicial)){

        numeroFinal = String(valorNumeroInicial).replace(',', '.')
        numeroInicial = String(valorNumeroFinal).replace(',', '.')

    }

    if(Number(tabuadaFinal) < Number(tabuadaInicial)){

        tabuadaFinal = String(valorTabuadaInicial).replace(',', '.')
        tabuadaInicial = String(valorTabuadaFinal).replace(',', '.')

    }

    if(tabuadaInicial == '' || tabuadaFinal == '' || numeroInicial == '' || numeroFinal == '' ){
        console.log('ERRO: Todos os valores devem ser preenchidos')
        return false
        
    } else if(isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(numeroInicial) || isNaN(numeroFinal)){
        console.log('ERRO: Todos os valores devem ser números')
        return false

    }else if (tabuadaInicial < 1 || tabuadaInicial > 100 || tabuadaFinal < 1 || tabuadaFinal > 100){
        console.log('ERRO: Você deve escolher uma tabuada entre 2 e 100')
        return false

    }else if (numeroInicial < 1 || numeroInicial > 50 || numeroFinal < 1 || numeroFinal > 50){
        console.log('ERRO: Escolha um valor entre 1 e 50 para calcular a tabuada')
        return false
    }

    let contInicial = numeroInicial

    while(numeroInicial < numeroFinal){

        criarTabuada(tabuadaInicial, contInicial, numeroFinal)
        tabuadaInicial++
        numeroInicial++

    }

}

module.exports = {
    tabuada
}