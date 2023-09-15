/*************************************************************************
* Objetivo: Manipular entrada e saída de dados para o usuário
* Data: 04/08/2023
* Autor: Ryan Alves
* Versão: 1.0
*************************************************************************/

//Importe da biblioteca de entrada de dados via teclado
var readline = require('readline')

//No javascript os métodos dos objetos são tratados como função -> ({})

//Criando um objeto (entradaDeDados) para ser uma referencia da biblioteca READLINE
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Função de callBack que permite apresentar uma mensagem no terminal, e captar a digitação do usuário
//O dado chegará para dentro da função através do seu argumento (nomeUsuario)

//Entrada de dados do nome
entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {

    //Recebe o nome digitado
    var nome = nomeUsuario

    //Entrada de dados da idade
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario) {

        //Recebe a idade digitada
        var idade = idadeUsuario

        //Entrada de dados do email
        entradaDeDados.question('Digite seu email: ', function (emailUsuario) {

            //Recebe o email digitado
            var email = emailUsuario

            //Entrada de dados do telefone
            entradaDeDados.question('Digite seu telefone: ', function (telefoneUsuario) {

                //Recebe o telefone digitado
                var telefone = telefoneUsuario

                //Exibe os valores informados
                console.log(`Olá ${nome}, você tem ${idade} anos. Seu email é: ${email}. Seu telefone é ${telefone}.`)

                //Encerra o processamento de entrada de dados
                entradaDeDados.close()

            })

        })

    })

})