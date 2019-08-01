const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'ABC',
            numero: 1000
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 42
    },
    {
        nome: 'Junior',
        idade: 19
    }],
    calcularSeguro: function () {
        //...
    }

}

console.log(carro)
carro.proprietario.endereco.numero = 1000
carro['proprietario']['nome'] = 'Joao Manoel'
console.log(carro)
