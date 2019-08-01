const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//retorna todas as chaves do obj
console.log(Object.values(pessoa))//retorna todos os valores
console.log(Object.entries(pessoa))//retorna um array com subarrays com os chaves 
//e os valores

Object.entries(pessoa).forEach(([chave, valor]) => {//utilizando um operador 
    console.log(`${chave}: ${valor}`)//destructuring
});

//metodo que cria novos attr e ainda define características

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
// Object.entries(pessoa).forEach(([chave, valor]) => {//utilizando um operador 
//     console.log(`${chave}: ${valor}`)//destructuring
// });

//Object.assign ES2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)