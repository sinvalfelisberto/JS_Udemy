// IIFE -> Immediately Invoked Function Expression

// (function(){
//     console.log('será executado na hora')
//     console.log('foge do escopo mais abrangente')
// })

// ()

// const hello = (function() {
//     console.log('Hello, world')
// })

// hello()

// const self = this;

// (function() {console.log(this === self)})() 

// this.nome = 'Almeida';

// (function() {console.log(this.nome)})() 

(function(x) { console.log(`${x} x 10 = ${x * 10}`)})(20)