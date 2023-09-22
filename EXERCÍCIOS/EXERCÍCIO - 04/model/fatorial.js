/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular fatorial
* Data: 22/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

const calcularFatorial = (valorFatorial) => {

    let fatorial = String(valorFatorial).replace(',', '.')

    if(fatorial == ''){
        console.log('ERRO: Você deve inserir um valor')
        return false
        
    } else if(isNaN(fatorial)){
        console.log('ERRO: Você deve inserir um número')
        return false

    }else if (Number(fatorial) == 0){
        console.log('ERRO: Não existe fatorial de 0')
        return false

    }else if (Number(fatorial) == 1){
        console.log('ERRO: Você deve inserir um valor maior que 1')
        return false

    }else if (Number(fatorial) < 0){
        console.log('ERRO: Você deve inserir um valor positivo')
        return false

    }

    fatorial = Number(fatorial)
    let resultado = 1
    let resposta = fatorial, aux = fatorial

    while (fatorial >= 1){

        resultado *= fatorial

        if(fatorial != 1)
        resposta = `${resposta} x ${fatorial-1}`
        else
        resposta = `${resposta}`

        fatorial--

    }

    console.log(`O fatorial de ${aux} é ${resposta} = ${resultado}`)

    return true

}

module.exports = {

    calcularFatorial

}
