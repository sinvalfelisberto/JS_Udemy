const pessoa = {
    saudacao: 'Bom dia!!!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() //tudo certo
const falar = pessoa.falar
falar()//vai ser undefined pq aqui o this não aponta pro obj
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()//aqui o bind aponta que o pessoa.falar é do obj pessoa

