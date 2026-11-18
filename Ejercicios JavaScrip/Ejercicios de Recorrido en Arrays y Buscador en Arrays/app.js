console.log("Ejercicios Metodos For");
console.log("ejercicio 1");

let nombres = ["Angel", "Josue", "David", "Brandon", "Carlos"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log("Ejercicio 2");
let numeros = [2, 4, 6, 8, 10];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}

console.log("Ejercicio 3");

let frutas = ["Manzana", "Pera", "Uva", "Mango", "Banano"];
for (let i = 0; i < frutas.length; i++) {
    if (i % 2 === 0) {
        console.log(frutas[i]);
    }
}

console.log("Ejercicios Metodos While");
console.log("ejercicio 1");

let nombres1 = ["Ana", "Luis", "Pedro", "Sofia"];
let i = 0;
while (i < nombres1.length) {
    console.log(nombres1[i]);
    i++;
}

console.log("ejercicio 2");

let numeros2 = [2, 8, 4, 10, 3, 7];
let j = 0

while (j < numeros2.length) {
    if (numeros2[j] > 5) {
        console.log(numeros2[j]);
    }
    j++;
}

console.log("Ejercicio 3");

let frutas1 = ["Manzana", "Pera", "Uva", "Mango", "Banano"];
let f = 0;

while (f < frutas1.length) {
    console.log(frutas1[f]);
    f++;
}
console.log("La cantidad de frutas que tiene el array es de: " + f);


console.log("Ejercicios Metodos For...of");

let nombres3 = ["Juan", "Ana", "Luis", "Pedro"];
for (nuevosNombre of nombres3) {
    console.log(nuevosNombre);
}

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];
for (numeros3Nuevo of numeros3) {
    if (numeros3Nuevo % 2 == 0) {
        console.log(numeros3Nuevo);
    }
}

let frutas3 = ["Manzana", "Pera", "Uva", "Mango"];
for (frutasNuevas of frutas3) {
    console.log("Me gusta la " + frutasNuevas)
}

console.log("Ejercicios Metodos forEach");

let nombres4 = ["Ana", "Luis", "Carlos", "Maria"];
nombres4.forEach((nombre) => {
    console.log(nombre);
})

let numeros4 = [1, 2, 3, 4, 5];
numeros4.forEach((Num) => {
    console.log(Num * 3);
})

console.log("Ejercicios Metodos indexOf");

let nombres5 = ["Ana", "Luis", "Pedro", "Maria"];
const buscarNombre = nombres5.indexOf("Pedro");
console.log("El nombre esta en la posición: ", buscarNombre);

let numeros5 = [10, 20, 30, 40, 50];
const buscarNum = numeros5.indexOf(30);
console.log("El numero esta en la posición: ", buscarNum)

let Frutas5 = ["Manzana", "Pera", "Mango", "Uva"];
const buscarFrutas = Frutas5.indexOf("Mango");
console.log("La fruta esta en la posición: ", buscarFrutas);

console.log("Ejercicios Metodos includes");

let frutas6 = ["Manzana", "Pera", "Uva"];
let estaFrutas = frutas6.includes("Manzana");
console.log(estaFrutas);

let numeros6 = [5, 10, 15, 20];
let estaNumero = numeros6.includes(40);
console.log(estaNumero);

let nombres6 = ["Ana", "Luis", "Carlos"];
let estaNombre = nombres6.includes("Angel");
console.log(estaNombre);

console.log("Ejercicios Metodos some");

let numeros7 = [2, 5, 8, 15, 3];
let hayNumero = numeros7.some(num => num === 2);
console.log(hayNumero);

let numeros71 = [1, 3, 5, 8, 9];
let numeroPar = numeros71.some(num1 => num1 % 2 == 0);
console.log(numeroPar);

let nombres7 = ["Luis", "Pedro", "Ana", "Carlos"];
let hayNombre = nombres7.some(nam => nam === "Ana");
console.log(hayNombre)

console.log("Ejercicios Metodos Every");

let numeros8 = [1, 5, 8, 10];
let cumpleNum = numeros8.every(numero => numero < 0);
console.log(cumpleNum);

let numeros81 = [2, 4, 6, 8];
let numerosPares = numeros81.every(numpar => numpar % 2 == 0);
console.log(numerosPares);

let nombres8 = ["Carlos", "Pedro", "Luis", "Ana"];
let letrasNombres = nombres8.every(funcNombre => funcNombre.length > 3);
console.log(letrasNombres);

console.log("Ejercicios Metodos Find");

let numeros9 = [3, 8, 15, 20, 25];
let encuentraNumero = numeros9.find(encuentraNum => encuentraNum > 10);
console.log(encuentraNumero);

let numeros91 = [1, 3, 7, 8, 10];
let EncuentraPar = numeros91.find(funcNumPar => funcNumPar % 2 == 0);
console.log(EncuentraPar);

let nombres9 = ["Ana", "Luis", "Carlos", "Pedro"];
let encuentraNombre = nombres9.find(letras => letras.length > 5);
console.log(encuentraNombre);

console.log("Ejercicios Metodos Findidex");

let numeros10 = [3, 5, 12, 20, 25];
let posicionNum = numeros10.findIndex(posicionNumero => posicionNumero > 10);
console.log(posicionNum);

let numeros11 = [1, 3, 7, 8, 10];
let posicionNumPar = numeros11.findIndex(posicionPar => posicionPar % 2 == 0);
console.log(posicionNumPar);

let nombres10 = ["Ana", "Luis", "Carlos", "Pedro"];
let posicionNombre = nombres10.findIndex(funcPosicionNombre => funcPosicionNombre.length > 4);
console.log(posicionNombre);
