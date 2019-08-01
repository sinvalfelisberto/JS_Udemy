const getIntengerBetween = function( [ min = 0, max = 1000 ] ) {
    if( min > max ) [ min, max ] = [ max, min ]
    let valor = Math.random() * ( max - min) + min
    return Math.floor(valor)
}

let opt = 0

do{
    opt = getIntengerBetween( [ 10, 01 ] )
    console.log(`O número sorteado foi: ${opt}.`)
 
}while(opt != -1)

// let opt = 0
// let soma = 0
// for (let index = 1; index <= 7; index++) {
//     opt = getIntengerBetween( [ 60, 01 ] )
//     console.log( `O número sorteado foi ${opt}` )
//     soma += opt
// }

// console.log(`A soma dos números sorteados foi: ${soma}`)