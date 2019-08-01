const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'
const template = `Olá
${nome}!`

console.log(concatenação, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

//uso de funções arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)// Ei... CUIDADO!