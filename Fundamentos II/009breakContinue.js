nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// for(let x in nums){
//     if( x == 5) {
//         break
//     }
//     console.log(`${x} = ${nums[x]}`)
// }
// console.log('Parou no indice indicado pelo if!')

// for(let x in nums){
//     if( x == 5) {
//         console.log('pulou o índice ' + x)
//         continue
//     }
//     console.log(`${x} = ${nums[x]}`)
// }

externo: for(let a in nums) { //externo é rótulo
    for(let b in nums) {
        if ( a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = (${a}, ${b})`)
    }
}

console.log('Fim!')