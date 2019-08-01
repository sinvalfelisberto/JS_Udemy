//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a = 0, b = 0) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a = 0, b = 0) => {
    return a + b
}

console.log(soma(3, 5))

//retorno implícito versão ainda mais reduzida
const subtracao = (a = 0, b = 0) => a - b

console.log(subtracao(8, 1.5))

//ainda mais reduzida
const imprimaA = a => console.log(a)

imprimaA('Coisa massa!')