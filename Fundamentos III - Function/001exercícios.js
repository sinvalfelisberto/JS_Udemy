/* Create a function that returns the number of argument it was called with. */

const numArgs = (...a) => a.length//????????????????????



console.log(numArgs())
console.log(numArgs('foo'))
console.log(numArgs('foo', 'bar'))
console.log(numArgs(null, null))
console.log(numArgs('foo', 'bar', 5, null))
console.log(numArgs(false))
console.log(numArgs('foo', {}))
console.log(numArgs('foo', 'bar', {}))
console.log(numArgs([], [], {}))
console.log(numArgs('foo', 'bar', true, null, 0))

let escada = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        return this.step
    }
}

escada.up().up().down().up().down()
console.log(escada.showStep())

let pieces = [ 'king', 'queen','rook']
console.log( pieces.indexOf('rook'))

function divisible(num) {
    return (num % 100 == 0)
}

console.log(divisible(1000))
console.log(divisible(-1))