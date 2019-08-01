function soBoaNoticia(nota) {
    if ( nota >= 7 ) {
        console.log('Aprovado com '.concat(nota))
    }
}


console.log(soBoaNoticia(8.1))
console.log(soBoaNoticia(6))

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiroEuFalo(true)
seForVerdadeiroEuFalo(false)