// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

//operador
//tire de dentro obj o atributo nome e idade, do objeto pessoa
const { nome, idade} = pessoa

console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa

console.log(logradouro, numero, cep)

//Error: Cannot destructure property `ag` of 'undefined' or 'null'.
//const { conta: { ag, conta } } = pessoa
//console.log(ag, numero)

