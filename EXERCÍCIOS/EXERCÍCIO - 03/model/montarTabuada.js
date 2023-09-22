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

    console.log(`Tabuada do ${tabuada}`)

    while(nI < nF){

        let resultadoTabuada = tabuada * nI
        console.log(`${tabuada} x ${nI} = ${resultadoTabuada}`)

    }

}

console.log(criarTabuada(2, 0, 10))