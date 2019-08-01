// usando a notação literal
const obj1 = {}

//object em JS
const obj2 = new Object

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome,
    this.getPrecoComDesconto = () => {return preco * (1 - desc)}
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

p2.nome = 'MacBook'
console.log(p2.nome, p2.preco)
p2.preco = 1
console.log(p2.nome, p2.preco)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//function factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna um objeto json
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)