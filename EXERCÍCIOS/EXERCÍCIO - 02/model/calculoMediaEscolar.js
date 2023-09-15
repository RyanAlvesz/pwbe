/****************************************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular a média escolar
* Data: 15/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
* Nome do aluno; 
* Nome do professor; 
* Sexo do professor e do aluno; 
* Nome do curso; 
* Nome da disciplina; 
* 4 Notas que podem ser entre 0 e 100;
****************************************************************************************************************************************************/

const calcularMedia = (valorNota1, valorNota2, valorNota3, valorNota4) => {

    let nota1 = valorNota1, nota2 = valorNota2, nota3 = valorNota3, nota4 = valorNota4, media

    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' )
        console.log('ERRO: Todos os valores devem ser preenchidos')
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
        console.log('ERRO: Todos os valores devem ser números')
    else if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0)
        console.log('ERRO: As notas devem estar entre 0 e 100') 
    else{

        media = (nota1 + nota2 + nota3 + nota4) / 4

    }

    if(media != undefined)
        return media
    else
        return false

}

const verificarSituacao = (valorMedia) => {

    let media = valorMedia, situacao

    if(media >= 70)
        situacao = 'APROVADO'
    else 
        situacao = 'REPROVADO'

    return situacao

}

const exame = (valorExame, valorMedia) => {

    let notaExame = valorExame, novaMedia, valorMedia

    novaMedia = (notaExame + valorMedia) / 2 

    return novaMedia

}

console.log()

/*************
let aluno = nomeAluno, professor = nomeProfessor, pronomeAluno = sexoAluno, pronomeProfessor = sexoProfessor
let curso = nomeCurso, disciplina = nomeDisciplina

if(aluno == '' || professor == '' || pronomeAluno == '' || pronomeProfessor == '' || curso == '' || disciplina == ''){
    console.log('ERRO: Todos os valores devem ser preenchidos')

**************/

module.exports = {
    calcularMedia,
    verificarSituacao
}