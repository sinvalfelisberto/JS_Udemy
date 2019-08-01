//usando função construtora

function Pessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new Pessoa('João')
p1.falar()
p1.nome = 'Sinval'
p1.falar()
