//Function em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//Armazenar numa variável
const fun2 = function () {}

//Armazenar em um array
const array = [function ( a, b ) { return a+ b }, fun1, fun2]
console.log( array[0]( 2, 3 ))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log( obj.falar() )

// Passar como param
function run(fun) {
    fun()
}

run( function () { console.log( 'Executando...' ) } )

//Uma função pode retornar/conter uma função
function soma ( a, b ) {
    return function (c) {
        console.log( a + b + c )
    }
}

soma( 2, 3 )( 4 )//chamada direta

const cincoMais = soma( 2, 3 ) // armazenando em uma variável
cincoMais(4) // e executando depois