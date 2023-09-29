/****************************************************************************************************************************************************
* Objetivo: Aprender a trabalhar com estruturas de dados array e json
* Data: 29/09/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

// [ ] -> Representa a estrutura Array
// { } -> Representa a estrutura Json

const introducaoArray = () => {
    // Criando um array normal
    let listaDeNome = ['Ryan', 'Ana', 'Laura', 'Maria', 'Isabelle', 'GF', 'TR', 'JP']

    // Exibi os dados do array
    console.log(listaDeNome)

    // Exibi os dados do array em formato de tabela
    console.table(listaDeNome)

    // Retorna a quantidade de itens
    console.log(listaDeNome.length)
    
    // Adiciona um elemento no final do array
    listaDeNome.push('RM')
    
    // Adiciona um elemento no começo do array
    listaDeNome.unshift('Petri')
    
    // Remove o último elemento do array 
    listaDeNome.pop()
    
    // Remove o primeiro elemento do array 
    listaDeNome.shift()

    // Remove um determinado elemento do arry (índice, quantidadeDeElementos)
    listaDeNome.splice(2, 1)

}

const percorrendoArray = () => {

    let listaDeAlbunsTaylorSwift = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputantion', 'Lover', 'Folklore', 'Evermore', 'Midnights']

    let cont = 0

    while(cont < listaDeAlbunsTaylorSwift.length){

        console.log('Álbum ' + Number(cont+1) + '- ' + listaDeAlbunsTaylorSwift[cont])

        cont++

    }

    for(let cont = 1; cont < listaDeAlbunsTaylorSwift.length; cont++){

        console.log('Álbum ' + Number(cont+1) + '- ' + listaDeAlbunsTaylorSwift[cont])

    }

    listaDeAlbunsTaylorSwift.forEach( function(album, indice) {
        
        console.log('Álbum ' + (indice+1) + '- ' + album)

    });

    // Retorna o índice do elemento que foi encontrado
    // Caso não encontre, retorna -1
    console.log(listaDeAlbunsTaylorSwift.indexOf('Lover'))

    // Retorna verdadeiro ou falso
    console.log(listaDeAlbunsTaylorSwift.includes('Lover'))

}

const filtrarAlbuns = (nomeAlbum) => {

    let listaDeAlbunsTaylorSwift = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputantion', 'Lover', 'Folklore', 'Evermore', 'Midnights']
  
    let nome = String(nomeAlbum), status

    if(listaDeAlbunsTaylorSwift.indexOf(nome) >= 0){
        status = true
    } else{
        status = false  
    } 

    status = listaDeAlbunsTaylorSwift.includes(nome)

    listaDeAlbunsTaylorSwift.forEach(function(album){
        if(album.toLocaleUpperCase() == nome.toLocaleUpperCase())
            status = true
    })

    return status

}

console.log(filtrarAlbuns('lover'))