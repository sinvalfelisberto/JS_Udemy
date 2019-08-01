function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Pão', 0.15))
console.log(criarProduto('Café', 0.5))