const mesesDoAno = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
]

const data = new Date
const mesesAno = data.getMonth()


const retornaMes = function () {
    return mesesDoAno[mesesAno]
}
console.log(retornaMes())