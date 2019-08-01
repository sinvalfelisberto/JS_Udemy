//json é um formato de dados

const obj = { a: 1, b: 2, c:3, soma() { return a + b + this.c } }

console.log(JSON.stringify(obj))//converte para json: somente dados.
//JSON não usa as funções//formato textual.
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": []  }'))
