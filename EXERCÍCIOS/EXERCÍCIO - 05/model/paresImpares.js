/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para separar números ímpares e números pares
* Data: 22/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

const verificarValores = (numeroInicial, numeroFinal, escolhaUsuario) => {

    let nI = String(numeroInicial).replace(',', '.')
    let nF = String(numeroFinal).replace(',', '.')
    let opcao = Number(escolhaUsuario)

    if(nI == '' || nF == '' || opcao == ''){
        console.log('ERRO: Todos os valores devem ser preenchidos')
        return false
        
    } else if(isNaN(nI) || isNaN(nF) || isNaN(opcao)){
        console.log('ERRO: Todos os valores devem ser números')
        return false

    }else if (nI < 0 || nI > 500){
        console.log('ERRO: Você deve escolher um valor inicial entre 0 e 500')
        return false

    }else if (nF < 100 || nF > 1000){
        console.log('ERRO: Você deve escolher um valor final entre 100 e 1000')
        return false

    }else if (Number(nF) < Number(nI)){
        console.log('ERRO: Você deve inserir um valor final maior que o valor inicial')
        return false

    }else if (nI == nF){
        console.log('ERRO: Você não pode inserir valores iguais')
        return false
        
    }else if (opcao < 1 || opcao > 3 || opcao % 1 != 0){
        console.log('ERRO: Você deve selecionar uma opção válida')
        return false   
        
    }else{
        
        opcao = Number(opcao)
        nI = Number(nI)
        nF = Number(nF)

        if (opcao == 1)
            verificarImpares(nI, nF)
        else if (opcao == 2)
            verificarPares(nI, nF)
        else if (opcao == 3){
            verificarPares(nI, nF)
            console.log('')
            verificarImpares(nI, nF)
        }
      
        return true

    } 
        
}

const verificarPares = (numeroInicial, numeroFinal) => {

    let nI = numeroInicial
    let nF = numeroFinal
    let qntNumeros = 0

    console.log('--------------------------------------')
    console.log('         Lista de números pares')
    console.log('--------------------------------------')

    while (nI < nF){

        if (nI % 2 == 0){
            console.log(nI)
            qntNumeros += 1
        }

        nI++

    }

    console.log('--------------------------------------')
    console.log('Quantidade de números encontrados: ' + qntNumeros)
    console.log('--------------------------------------')

    return true

}

const verificarImpares = (numeroInicial, numeroFinal) => {

    let nI = numeroInicial
    let nF = numeroFinal
    let qntNumeros = 0

    console.log('--------------------------------------')
    console.log('       Lista de números ímpares')
    console.log('--------------------------------------')

    while (nI < nF){

        if (nI % 2 != 0){
            console.log(nI)
            qntNumeros += 1
        }

        nI++

    }

    console.log('--------------------------------------')
    console.log('Quantidade de números encontrados: ' + qntNumeros)
    console.log('--------------------------------------')

    return true

}

module.exports = {
    verificarValores
}