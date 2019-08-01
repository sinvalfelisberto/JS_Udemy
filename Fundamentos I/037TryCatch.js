function tratarErroELancar(error) {
    //throw new Error('Fudeu!')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase().concat('!!!'))
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log('Final')
    }
}

const obj = { n0me: 'Sinval' }
imprimirNomeGritado(obj)