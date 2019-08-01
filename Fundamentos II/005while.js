function getIntegerRandomBetween(min, max) {
    const valor = Math.random() * ( max - min ) + min
    return Math.floor( valor )
}

let option = 0

while( option != -1 ) {
    option = getIntegerRandomBetween(-1, 10)
    console.log(`Opção escolhida foi ${option}.`)
}
console.log('Até a próxima!')