/****************************************************************************************************************************************************
* Objetivo: Realiza o cálculo da média escolar e monta um relatório do aluno
* Data: 22/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var mediaApp = require('./model/calculoMediaEscolar')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual o nome do aluno?: ', function (nomeAluno) {

    let nomeA = nomeAluno

    if(nomeA != ''){

        entradaDeDados.question('Qual o sexo do aluno? [Masculino - Feminino]: ', function (sexoAluno) {

            let sA = sexoAluno, pronomeA

            pronomeA = mediaApp.verificarPronomeAluno(sA)

            if (pronomeA) {

                entradaDeDados.question('Qual o nome do professor?: ', function (nomeProfessor) {

                    let nomeP = nomeProfessor

                    if(nomeP != ''){

                        entradaDeDados.question('Qual o sexo do professor? [Masculino - Feminino]: ', function (sexoProfessor) {

                            let sP = sexoProfessor, pronomeP

                            pronomeP = mediaApp.verificarPronomeProfessor(sP)

                            if (pronomeP) {

                                entradaDeDados.question('Qual o nome da disciplina?: ', function (nomeDisciplina) {

                                    let disciplina = nomeDisciplina

                                    if(disciplina != ''){

                                        entradaDeDados.question('Qual o nome do curso?: ', function (nomeCurso) {

                                            let curso = nomeCurso

                                            if(curso != ''){

                                                entradaDeDados.question('Digite a 1 nota do aluno (0 - 100): ', function (nota1) {

                                                    let n1 = nota1

                                                    entradaDeDados.question('Digite a 2 nota do aluno (0 - 100): ', function (nota2) {

                                                        let n2 = nota2

                                                        entradaDeDados.question('Digite a 3 nota do aluno (0 - 100): ', function (nota3) {

                                                            let n3 = nota3

                                                            entradaDeDados.question('Digite a 4 nota do aluno (0 - 100): ', function (nota4) {

                                                                let n4 = nota4

                                                                let media, sitAv, exame, sitEx

                                                                media = mediaApp.calcularMedia(n1, n2, n3, n4)

                                                                if(media){

                                                                    sitAv = mediaApp.verificarSituacaoAvaliacao(media)

                                                                    if(sitAv == 'para EXAME'){
                                                                        
                                                                        entradaDeDados.question('Digite a nota de exame (0 - 100): ', function (notaExame) {
                        
                                                                            let nE = notaExame

                                                                            exame = mediaApp.calcularMediaExame(media, nE)

                                                                            if (exame) {

                                                                                sitEx = mediaApp.verificarSituacaoExame(exame)

                                                                                mediaApp.montarRelatorio(nomeA, nomeP, pronomeA, pronomeP, curso, disciplina, sitAv)
                                                                                mediaApp.montarNotasRelatorioExame(pronomeA, n1, n2, n3, n4, nE, sitEx, media, exame)

                                                                            }
                        
                                                                        })
                    
                                                                    }else{

                                                                        mediaApp.montarRelatorio(nomeA, nomeP, pronomeA, pronomeP, curso, disciplina, sitAv)
                                                                        mediaApp.montarNotasRelatorioAvaliacao(pronomeA, n1, n2, n3, n4, media)

                                                                    }

                                                                }

                                                            })

                                                        })

                                                    })

                                                })

                                            } else 
                                                console.log('ERRO: Todos os valores devem ser preenchidos')

                                        })

                                    } else 
                                        console.log('ERRO: Todos os valores devem ser preenchidos')

                                })

                            }

                        })

                    } else 
                        console.log('ERRO: Todos os valores devem ser preenchidos')

                })

            }

        })

    } else 
        console.log('ERRO: Todos os valores devem ser preenchidos')

})
