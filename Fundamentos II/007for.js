// let contador = 1
// while (contador <= 10) {
//     console.log(`Contador = ${contador}`)
//     contador++
// }

// for(let i = 1; i <= 10; i++) {
//     console.log(`i = ${i}`)
// }
const media = function (soma, qtdItens) {
    let valor = soma / qtdItens
    return valor.toFixed(7)
}

const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7, 4.6 ]
let soma = 0
for(let i = 0; i < notas.length; i++) {
    console.log(`${i + 1}ª nota: ${notas[i]} `)
    soma += notas[i]
}

// console.log(media(soma, notas.length))
console.log(media(soma, notas.length))