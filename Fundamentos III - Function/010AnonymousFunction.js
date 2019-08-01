const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)// sem o soma() explicito
imprimirResultado(3, 4, soma)// soma explicito
imprimirResultado(3, 4, function(x, y) {
    return x - y
})//função anonima
imprimirResultado(3, 4, (x, y) => x * y)//arrow function

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()