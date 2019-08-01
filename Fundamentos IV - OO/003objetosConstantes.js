//pessoa -> 132 -> {...}
const pessoa = {nome: 'João'}


//para travar o obj
const pessoaConstante = Object.freeze({ nome: 'Joao' })

pessoaConstante.nome = 'Maria'

console.log(pessoaConstante)