function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}
obj2.nome = 'Sinval'
obj1.falar()
obj2.falar()

obj3 = {}
obj3.__proto__ = MeuObjeto.prototype

obj3.nome = 'Objeto 3'
obj3.falar()

//resumindo a loucura
console.log((new MeuObjeto).__proto__ == MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__ === undefined)