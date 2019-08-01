const a = { nome: 'Teste'}
const b = a

b.nome = 'opa'

console.log(b.nome)
console.log(a.nome)

let c = 3
let d = c
d++

console.log(c, d)

//null

let valor

console.log(valor) //undefined -- vazio

//console.log(valor2) //valors it is not defined

valor = null //ausencia de valor -- usado para zerar o
             //valor de uma variável
console.log(valor)
//console.lot(valor.toString()) //erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evitar usar undefined. Melhor null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)