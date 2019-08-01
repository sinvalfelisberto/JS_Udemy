// function declaration é carregada antes de o código ser executado
console.log(soma(5, 10))

// function declarattion
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function (x, y){
    return x - y
}
console.log(sub(5,10))

// named function expression
const mult = function mult (x, y) {
    return x* y
}
console.log(mult(5, 10))