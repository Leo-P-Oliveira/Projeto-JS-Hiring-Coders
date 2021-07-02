const livros = require('./database')


//Pegar o input do usuário

const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro? S/N')

//Se for sim, mostra as categorias disponíveis e pegunta qual categoria ela escolhe
//Se ela escolher não, mostra todos os livros em ordem crescente de páginas
if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Historia', '/Medicina', '/Engenharia', '/Tecnologia')

    const entradaCategoria = readLine.question('Qual categoria você escolhe?')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}


