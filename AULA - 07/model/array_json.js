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

    while (cont < listaDeAlbunsTaylorSwift.length) {

        console.log('Álbum ' + Number(cont + 1) + '- ' + listaDeAlbunsTaylorSwift[cont])

        cont++

    }

    for (let cont = 1; cont < listaDeAlbunsTaylorSwift.length; cont++) {

        console.log('Álbum ' + Number(cont + 1) + '- ' + listaDeAlbunsTaylorSwift[cont])

    }

    listaDeAlbunsTaylorSwift.forEach(function (album, indice) {

        console.log('Álbum ' + (indice + 1) + '- ' + album)

    })

    // Retorna o índice do elemento que foi encontrado
    // Caso não encontre, retorna -1
    console.log(listaDeAlbunsTaylorSwift.indexOf('Lover'))

    // Retorna verdadeiro ou falso
    console.log(listaDeAlbunsTaylorSwift.includes('Lover'))

}

const filtrarAlbuns = (nomeAlbum) => {

    let listaDeAlbunsTaylorSwift = ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputantion', 'Lover', 'Folklore', 'Evermore', 'Midnights']

    let nome = String(nomeAlbum), status

    if (listaDeAlbunsTaylorSwift.indexOf(nome) >= 0) {
        status = true
    } else {
        status = false
    }

    status = listaDeAlbunsTaylorSwift.includes(nome)

    listaDeAlbunsTaylorSwift.forEach(function (album) {
        if (album.toLocaleUpperCase() == nome.toLocaleUpperCase())
            status = true
    })

    return status

}

const manipulandoArrayJson = () => {

    // Existem diversos tipos de dados para integração de tecnologias
    // <atributo> valor </atributo> -> XML
    // { atributo: valor } -> Json

    // Criando um JSON manuel
    let contato = 
    {
        nome: 'Taylor Swift',
        idade: 33,
        telefone: '1113131313',
        email: 'missamericana@theeras.com'
    }
    let contato2 = { nome: 'Augustine', idade: 19, telefone: '1113131313', email: 'august@folklore.com' }
    let contato3 = { nome: 'Betty', idade: 20, telefone: '1113131313', email: 'betty@folklore.com' }

    let arrayContatos = [contato, contato2, contato3]

    // Criando atributos no JSON de forma dinâmica
    contato.celular = '12345678910'
    contato.data_nascimento = '1989-13-12'

    console.log('Nome: ' + contato.nome)
    console.log('Idade: ' + contato.idade)
    console.log('Telefone: ' + contato.telefone)
    console.log('Email: ' + contato.email)
    console.log('Celular: ' + contato.celular)
    console.log('Data de Nascimento: ' + contato.data_nascimento)
    console.log('')

    console.log(arrayContatos[2].nome)

    arrayContatos.forEach(function(dados) {
        console.log('Nome: ' + dados.nome)
        console.log('Idade: ' + dados.idade)
        console.log('Telefone: ' + dados.telefone)
        console.log('Email: ' + dados.email)

        if(dados.celular != undefined)
            console.log('Celular: ' + dados.celular)
        if(dados.data_nascimento != undefined)
        console.log('Data de Nascimento: ' + dados.data_nascimento)

        console.log('')
    })

}

const produtosArrayJson = () => {

    let listaCores = [

        { id: 1, nome_cor: 'Branco' },
        { id: 2, nome_cor: 'Preto' },
        { id: 3, nome_cor: 'Azul' },
        { id: 4, nome_cor: 'Roxo' },
        { id: 5, nome_cor: 'Rosa' }

    ]

    let listaMarcas = [

        { id: 1, nome_marca: 'Dell' },
        { id: 2, nome_marca: 'Lenovo' },
        { id: 3, nome_marca: 'Apple' },
        { id: 4, nome_marca: 'Samsung' },
        { id: 5, nome_marca: 'Acer' }

    ]

    let listaCategorias = [

        { id: 1, nome_categoria: 'Hardware', descricao: 'Hardware'},
        { id: 2, nome_categoria: 'Periféricos', descricao: 'Periféricos'},
        { id: 3, nome_categoria: 'Gamer', descricao:'Gamer'},
        { id: 4, nome_categoria: 'Acessórios', descricao: 'Acessórios'}

    ]

    // Cria um objeto do tipo JSON para array de produtos
    let JSONProdutos = {}
    
    // Cria um objeto do tipo ARRAY para guardar os produtos
    let ARRAYProdutos = []
    
    // Objeto para criar os produtos
    let produto1 = {
        id: 1,
        nome: 'Mouse',
        descricao: 'Mouse bonito',
        categoria: listaCategorias[1],
        marca: listaMarcas[0],
        cor:[
            listaCores[0],
            listaCores[1],
            listaCores[2]
        ]
    }

    let produto2 = {
        id: 2,
        nome: 'Teclado',
        descricao: 'Teclado bonito',
        categoria: listaCategorias[1],
        marca: listaMarcas[2],
        cor: listaCores
    }

    let produto3 = {
        id: 3,
        nome: 'Celular Gamer',
        descricao: 'Celular RGB Gamer Bonito',
        categoria: listaCategorias[2],
        marca: listaMarcas[2],
        cor: [
            listaCores[0],
            listaCores[1],
            listaCores[3],
        ]
    }

    let produto4 = {
        id: 4,
        nome: 'CPU',
        descricao: 'CPU potente e bonita',
        categoria: listaCategorias[0],
        marca: listaMarcas[4],
        cor: [listaCores[1]]
    }

    let produto5 = {
        id: 5,
        nome: 'Fones de Ouvido',
        descricao: 'Fones Bluetooth bonitos',
        categoria: listaCategorias[3],
        marca: listaMarcas[3],
        cor:[
            listaCores[0],
            listaCores[1],
            listaCores[4]
        ]
    }

    // Adicionando produtos no array de produtos
    ARRAYProdutos.push(produto1, produto2, produto3, produto4, produto5)

    // Adiciona o atributo produto e coloca o array de produtos
    JSONProdutos.produtos = ARRAYProdutos
    // Adiciona o atributo count e coloca a quantidade de produtos
    JSONProdutos.count = ARRAYProdutos.length
    // Adiciona o atributo status e coloca o código 200
    JSONProdutos.status = 200

    return JSONProdutos

}

const listagemProdutos = () => {

    const JSONProdutos = produtosArrayJson().produtos

    // console.log(JSONProdutos)

    console.log(' === Listagem de Produtos === ')
    console.log('')

    JSONProdutos.forEach(function(produto) {
        console.log('Nome: ' + produto.nome)
        console.log('Descrição: ' + produto.descricao)
        console.log('Categoria: ' + produto.categoria.nome_categoria)
        console.log('Marca: ' + produto.marca.nome)
        console.log('Cores: ')
        produto.cor.forEach(function(cor){
            console.log(cor.nome_cor)
        })


    })

}

console.log(listagemProdutos())