// Opções de Códigos
// Código 1 - À vista, com 8% de desconto
// Código 2 - À vista, com 4% de desconto
// Código 3 - Em 2x, preço normal sem juros
// Código 4 - Em 4x, preço ascrescido de 8%

function calcular (valorVenda, codigoResposta){

    let valor = valorVenda
    let codigo = codigoResposta
    let novoValor
    let resposta
    let parcela

    if (codigo == 1){
        
        novoValor = valor - ( valor * (8 / 100))
        resposta = `R$:${valor} será cobrado à vista com 8% de desconto = R$:${novoValor.toFixed(2).replace('.', ',')}`
        
    }else if (codigo == 2){
        
        novoValor = valor - ( valor * (4 / 100))
        resposta = `R$:${valor} será cobrado à vista com 4% de desconto = ${novoValor.toFixed(2).replace('.', ',')}`

    }else if (codigo == 3){

        parcela = valor / 2
        resposta = `R$:${valor} será parcelado em 2x de ${parcela.toFixed(2).replace('.', ',')}`
    
    }else{

        novoValor = valor + ( valor * (8 / 100) )
        parcela = novoValor / 4
        resposta = `R$:${valor} acrescido em 8% será parcelado em 4x de ${parcela.toFixed(2).replace('.', ',')}`

    }

    return resposta

}

module.exports ={
    calcular
}