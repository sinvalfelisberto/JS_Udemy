//const comp = (str1, str2) => str1.lenght === str2.lenght
function comp(str1, str2) {
    if(str1.length == str2.length) {
        return true
    } else {
        return false
    }
}

console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))
console.log(comp("meow", "woof"))
console.log(comp("jrnvjrnnt", "cvjknfjvm)fvnfjn"))
console.log(comp("jkvnjrt", "krnf"))
console.log(comp("Facebook", "Snapchat"))

