function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))