function area ( largura, altura ) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Área não pode ser maior do que 20m2: Area = ${area}`)
    } else {
        return area
    }
}

console.log(area(3,6))
console.log(area(3))
console.log(area())
console.log(area(1, 7, 9, 14))