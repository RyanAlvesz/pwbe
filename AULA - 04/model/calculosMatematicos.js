
// Modelo tradicional de criar funções
// Toda função precisa de um return (boa prática)

function calculadora(numero1, numero2, tipoCalculo) {


    // Recebendo os valores dos argumentos da função em variáveis locais
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado


     // Versão 2.0 - Utilizando Switch Case
     
    switch (operacao) {
        case 'SOMAR':
        case '+':
            resultado = valor1 + valor2
            break
    
        case 'SUBTRAIR':
        case '-':
            resultado = valor1 - valor2
            break

        case 'MULTIPLICAR':
        case 'x':
            resultado = valor1 * valor2
            break

        case 'DIVIDIR':
        case '/':
            if (valor2 != 0)
            resultado = valor1 / valor2
            else 
            console.log('ERRO? Não é possível realizar uma divisão por 0')
        break
        
        default:
            console.log('ERRO: É obrigatório informar uma operação válida')
            break;
    }

    if (resultado != undefined)
        
        return Number(resultado).toFixed(2)
                    
    else

        return false
    
}

// Deixando a função calculadora pública
module.exports ={
    calculadora
}

//Calculadora com IF
// Validação do tipo de operação matemática
   
// if (operacao == 'SOMAR') 

    //     resultado = valor1 + valor2

// else if (operacao == 'SUBTRAIR') 

    //     resultado = valor1 - valor2

// else if (operacao == 'MULTIPLICAR') 

    //     resultado = valor1 * valor2

// else if (operacao == 'DIVIDIR') {

    //     if (valor2 != 0)

    //         resultado = valor1 / valor2

    //     else 

    //         console.log('ERRO? Não é possível realizar uma divisão por 0')

// Validação para operações matematicas válidas

// } else

//     console.log('ERRO: É obrigatório informar uma operação válida')   