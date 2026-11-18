

function rango(inicio, fin) {
    let array = []
    for (let i = inicio; i <= fin; i++) {
        array.push(i)
    }
    return array
}

function sum(arreglo) {
    let suma = 0
    for (arreglo of arreglo) {
        suma = suma + arreglo
    }
    return suma
}

console.log(rango(1, 10))
// console.log(sum())
console.log(sum(rango(1, 10)))




