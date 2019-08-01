function Pessoa() {
    this.idade = 0

    const self = this// ao invés de usar o bind da linha 8, usa-se a var  
    setInterval(function() { //para garantir que o this seja o da classe Pessoa
        /*this*/self.idade++
        console.log(/*this*/self.idade)
    }/*.bind(this)*/, 500)
}

new Pessoa

