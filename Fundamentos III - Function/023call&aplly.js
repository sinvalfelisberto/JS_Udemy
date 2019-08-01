function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome}: ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco

}

global.preco = 20
global.desc = 0.1
console.log(produto.getPreco())


const carro = { nome: 'Up', preco: 49990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [ 0.17, 'libras']))
