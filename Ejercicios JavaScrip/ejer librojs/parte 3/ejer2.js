function arrayEnReversa(arreglo) {
    conta = 0
    for (arreglo of arreglo) {
        conta++
    }
    for(let i = conta; i <= arreglo[0]; i++){
console.log(i)
    }
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(arrayEnReversa(num))