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

    let nota1 = String(valorNota1).replace(',', '.')
    let nota2 = String(valorNota2).replace(',', '.')
    let nota3 = String(valorNota3).replace(',', '.')
    let nota4 = String(valorNota4).replace(',', '.')
    let media

    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' )
        console.log('ERRO: Todos os valores devem ser preenchidos')
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
        console.log('ERRO: Todos os valores devem ser números')
    else if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0)
        console.log('ERRO: As notas devem estar entre 0 e 100') 
    else{

        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)

        media = (nota1 + nota2 + nota3 + nota4) / 4

    }

    if(media)
        return String(media).replace('.', ',')
    else
        return false

}

const verificarSituacaoAvaliacao = (valorMedia) => {

    let media = String(valorMedia).replace(',', '.')
    media = Number(media)

    let situacao

    if(media >= 70)
        situacao = 'APROVADO'
    else if (media >= 50)
        situacao = 'para EXAME'
    else
        situacao = 'REPROVADO'

    return situacao

}

const calcularMediaExame = (valorExame, valorMedia) => {

    let notaExame = String(valorExame).replace(',', '.')
    
    let media = String(valorMedia).replace(',', '.')
    media = Number(media)
    
    let novaMedia 
    
    if(isNaN(notaExame) || notaExame > 100 || notaExame < 0 || notaExame == '')
        console.log('Nota de exame inválida')
    else
        notaExame = Number(notaExame)
        novaMedia = (notaExame + media) / 2 

    if (novaMedia != undefined)
        return novaMedia
    else
        return false

}

const verificarSituacaoExame = (valorMediaExame) => {

    let media = String(valorMediaExame).replace(',', '.')
    media = Number(media)
    let situacao

    if(media >= 60)
        situacao = 'APROVADO EM EXAME'
    else 
        situacao = 'REPROVADO EM EXAME'

    return situacao

}

const verificarPronomeProfessor = (sexoProfessor) => {

    let sexo = String(sexoProfessor).toLocaleLowerCase(), pronome
    
    if(sexo == ''){
        console.log('ERRO: Todos os valores devem ser preenchidos')
        return false
    }else if(sexo == 'feminino')
        pronome = 'Professora'
    else if (sexo == 'masculino') 
        pronome = 'Professor'
    
    if (sexo == 'feminino' || sexo == 'masculino'){
        return pronome
    }else{
        console.log('Sexo inválido')
        return false
    }

}

const verificarPronomeAluno = (sexoAluno) => {

    let sexo = String(sexoAluno).toLocaleLowerCase(), pronome
    
    if(sexo == ''){
        console.log('ERRO: Todos os valores devem ser preenchidos')
        return false
    }else if(sexo == 'feminino')
        pronome = 'Aluna'
    else if (sexo == 'masculino') 
        pronome = 'Aluno'
    
    if (sexo == 'feminino' || sexo == 'masculino'){
        return pronome
    }else{
        console.log('Sexo inválido')
        return false
    }
}

const montarRelatorio = (nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, situacaoAvaliacao) => {
    
    let aluno = nomeAluno, professor = nomeProfessor, pronomeAluno = sexoAluno, pronomeProfessor = sexoProfessor
    let curso = nomeCurso, disciplina = nomeDisciplina
    let sitAv = situacaoAvaliacao

    console.log('')
    console.log('Relatório do Aluno')
    console.log('')

    if (pronomeAluno == 'Aluna')
        console.log(`A ${pronomeAluno} ${aluno} foi ${sitAv} na disciplina ${disciplina}`)
    else if (pronomeAluno == 'Aluno')
        console.log(`O ${pronomeAluno} ${aluno} foi ${sitAv} na disciplina ${disciplina}`)

    console.log(`Curso: ${curso}`)
    console.log(`${pronomeProfessor}: ${professor}`)

    return true

}

const montarNotasRelatorioExame = (sexoAluno, nota1, nota2, nota3, nota4, notaExame, situacaoExame, mediaFinal, mediaExame) => {

    let pronomeAluno = sexoAluno
    let n1 = nota1, n2 = nota2, n3 = nota3, n4 = nota4, nE = notaExame
    let mediaAv = mediaFinal, mediaEx = mediaExame, sitEx = situacaoExame

    if (pronomeAluno == 'Aluna')
        console.log(`Notas da ${pronomeAluno.toLocaleLowerCase()}: ${n1}, ${n2}, ${n3}, ${n4}, ${nE}`)
    else if (pronomeAluno == 'Aluno')
        console.log(`Notas do ${pronomeAluno.toLocaleLowerCase()}: ${n1}, ${n2}, ${n3}, ${n4}, ${nE}`)  

    console.log(`Média final: ${mediaAv}`)
    console.log(`Média exame: ${mediaEx}`)
    console.log(`Situação exame: ${sitEx}`)

    return true

}

const montarNotasRelatorioAvaliacao = (sexoAluno, nota1, nota2, nota3, nota4, mediaFinal) => {

    let pronomeAluno = sexoAluno
    let n1 = nota1, n2 = nota2, n3 = nota3, n4 = nota4
    let mediaAv = mediaFinal

    if (pronomeAluno == 'Aluna')
        console.log(`Notas da ${pronomeAluno.toLocaleLowerCase()}: ${n1}, ${n2}, ${n3}, ${n4}`)
    else if (pronomeAluno == 'Aluno')
        console.log(`Notas do ${pronomeAluno.toLocaleLowerCase()}: ${n1}, ${n2}, ${n3}, ${n4}`)  

    console.log(`Média final: ${mediaAv}`)

    return true

}

module.exports = {
    calcularMedia,
    verificarSituacaoAvaliacao,
    calcularMediaExame,
    verificarSituacaoExame,
    verificarPronomeAluno,
    verificarPronomeProfessor,
    montarRelatorio,
    montarNotasRelatorioAvaliacao,
    montarNotasRelatorioExame
}