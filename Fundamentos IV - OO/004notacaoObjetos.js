const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }//forma tradicional
const obj2 = { a, b, c }//es 2015 - os nomes dos atributos são
//os mesmos das variáveis
console.log( obj1, obj2 )

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // os nomes dos attr são definidos por
//variáveis

console.log(obj3.nota)

obj4 = { [nomeAttr]: valorAttr } // igual obj3, mas a definição
//acontece na declaração do obj4

console.log(obj4.nota)

const obj5 = {
    funcao1: function() {//forma tradicional de declarar
        // ...
    },
    funcao2() {//forma introduzida pela EC2015
        // ...
    }
}

console.log(obj5)