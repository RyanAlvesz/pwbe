/****************************************************************************************************************************************************
* Objetivo: Calcular a média de um aluno com base em 4 notas
* Data: 04/08/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
* Formas de criar variaveis e constantes
*
* var - permite criar uma variável de escopo global, ou seja, irá existir em todo o projeto
* let - permite criar uma variável de escopo local, ou seja, irá existir apenas naquele bloco
* const - permite criar uma constante, que pode ser de escopo local ou global. Sempre utilizamos em situações onde não haverá mudança de conteúdo
*
* Operadores de Comparação
*
* ==   - Comparação de conteúdo 
* !=   - Diferença
* >    - Maior que
* <    - Menor que
* >=   - Maior ou igual que 
* <=   - Menor ou igual que
* ===  - Comparação de conteúdos e dados iguais
* !==  - Comparação de conteúdos diferentes e dados iguais
* ==!  - Comparação de conteúdos iguais e tipos diferentes
*
* Operadores Lógicos
*
* E       -  AND - &&
* OU      -  0R  - ||
* NEGAÇÃO -  NOT - !
*
* Conversão de String para número
* 
* parseInt()   - Converte String para número inteiro
* parseFloat() - Converte String para números reais
* Number()     - Converte uma String para número inteiro ou real conforme necessidade
*
****************************************************************************************************************************************************/


//Importe da biblioteca de entrada de dados via teclado
var readline = require('readline')

//Cria o elemento de entrada de dados para digitação com usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual o seu nome? ', function(nomeAluno){

    let nome = nomeAluno

    entradaDeDados.question('Digite a sua primeira nota: ', function(n1){

        //Convertendo String para Number
        let nota1 = n1.replace(",", ".")

        entradaDeDados.question('Digite a sua segunda nota: ', function(n2){

            let nota2 = n2.replace(",", ".")

            entradaDeDados.question('Digite a sua terceira nota: ', function(n3){

                let nota3 = n3.replace(",", ".")
        
                entradaDeDados.question('Digite a sua quarta nota: ', function(n4){

                    let nota4 = n4.replace(",", ".")

                    // Verificando se todas as notas foram digitadas
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){

                        console.log('ERRO: É obrigatório informar todas as notas')

                    // Verificando se todas as notas são número
                    // isNaN() - Verifica se a variável não é um número    
                    
                    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        
                        console.log('ERRO: Você informou um texto')

                    //Verificando se as notas maiores que 10 ou menores que 0
                    }else if ( nota1 > 10 || nota1 < 0 ||  nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota1 < 0) {  

                        console.log('ERRO: É obrigatório informar uma nota entre 0 e 10')
                 
                    }else{

                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

                        // .toUpperCase() - Converte os caracteres em MAIÚSCULO
                        // .toLowerCase() - Coverte os caracteres em minúsculo
                        console.log(``)
                        console.log(`Nome do aluno: ${nome.toUpperCase()}`)

                        //Exibindo a média com apenas uma casa decimal - .toFixed()
                        //Trocando . por , na média - .replace('stringAnterior', 'stringPosterior')
                        console.log(`A Média é ${media.toFixed(1).replace('.', ',')}`) 

                    }

                    //Encerra o processamento de entrada de dados
                    entradaDeDados.close()

                })

            })

        })

    })

})