Object.prototype.attr0 = 'Z' //não faça isso em casa... cautela sempre
const avo = { attr1: 'A' }// tem como prototipo o Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }//tem como prototipo o avo
const filho = { __proto__: pai, attr3: 'C' }//tem como prototipo o pai
console.log(filho.attr1, filho.attr2, filho.attr3)
console.log(filho.attr0)
console.log(pai.attr1, pai.attr2, pai.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) { this.velAtual + delta <= this.velMax ? this.velAtual += delta : this.velAtual = this.velMax
        // if (this.velAtual + delta <= this.velMax) {
        //     this.velAtual += delta
        // } else {
        //     this.velAtual = this.velMax
        // }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

ferrari = {
    modelo: 'F40',
    velMax: 340 //shadowing -- sombreamento: este atrr sobrescreve o da herança
}

volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.aceleraMais(180)
ferrari.aceleraMais(800)
console.log(ferrari.status())
console.log(volvo.status())
