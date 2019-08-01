function rand( { min = 0, max = 1000 } ) {
    const valor = Math.random() * ( max - min ) + min
    return Math.floor(valor)
}

console.log( rand( { max: 60, min: 1 } ) )

//ou
const obj = { max: 50, min: 40 }
console.log( rand( obj ) )

//ou 
console.log( rand( { min: 955 } ) )
console.log( rand( { max: 10 } ) )
//ou
//console.log( rand() )
//que vai gerar este erro:
//TypeError: Cannot destructure
//Error: 
//property `min` of 'undefined' or 'null'.