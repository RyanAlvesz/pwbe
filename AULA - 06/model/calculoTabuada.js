/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular uma tabuada
* Data: 01/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

// Função para calcular tabuada
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    let tabuada = String(valorTabuada).replace(',', '.')
    let inicial = String(contadorInicial).replace(',', '.')
    let final = String(contadorFinal).replace(',', '.')

    let resultado
    let status = false

    if(Number(final) < (inicial)){

        final = contadorInicial
        inicial = contadorFinal

    }

    if(tabuada == '' || final == '' || inicial == '')
        console.log('ERRO: É a obrigatório a entrada de todos os valores')
    else if(isNaN(tabuada) || isNaN(inicial) || isNaN(final))
        console.log('ERRO: É obrigatóro informar números')
    else{

        // Converte as variáveis em número
        inicial = Number(inicial)
        final = Number(final)
        tabuada = Number(tabuada)

    for(;inicial <= final;inicial++){
    
            resultado = tabuada * inicial
            console.log(`${tabuada} x ${inicial} = ${resultado}`)

            status = true
    
        }

    }

    return(status)

}

module.exports = {
    calcularTabuada
}