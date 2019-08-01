//Função Arrow
let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' // possui param, mas que pode ser ignorado

console.log(dobro(Math.PI))
console.log(ola())
