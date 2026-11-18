

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FIZZBUZZ")
    } else if (numero % 5 === 0) {
        console.log("BUZZ")
    } else if (numero % 3 === 0) {
        console.log("FIZZ")
    } else {
        console.log(numero)
    }
}