// Ejercicio 1 
const numeros = [2, 4, 6, 8, 10];
const numDuplicados = numeros.map(num => num * 2);
console.log(numDuplicados);

// ejercicio 2
const nombres = ["ana", "pedro", "maria", "juan"];
const nombreMayusc = nombres.map(Nombre => Nombre.toUpperCase());
console.log(nombreMayusc);

// ejercicio 3
const notas = [70, 80, 65, 90, 75];
const sumaCincoNotas = notas.map(sumNota => sumNota + 5);
console.log(sumaCincoNotas);

// ejercicio 4
const numerosCuadrado = [1, 2, 3, 4, 5];
const calcularNumerosCuadrado = numerosCuadrado.map(numCuadrado => numCuadrado * numCuadrado);
console.log(calcularNumerosCuadrado);

// ejercicio 5
const saludoNombre = ["Carlos", "Laura", "Pedro", "Sofia"];
const mapSaludoNombre = saludoNombre.map(mapNombre => "Hola " + mapNombre);
console.log(mapSaludoNombre);

console.log("Ejercicio de Matriz")
// ejercicio 1
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}

// ejercicio 2
const matriz1 = [
    [2, 4],
    [6, 8],
    [10, 12]
];
let conta = 0;
for (let i1 = 0; i1 < matriz1.length; i1++) {
    for (let j1 = 0; j1 < matriz1[i1].length; j1++) {
        conta = conta + matriz1[i1][j1];
    }
}
console.log(conta);

// ejercicio 3

const encuentraNum = [
    [15, 8, 20],
    [7, 30, 12],
    [18, 5, 25]
];
numMayor = 0;
for (let i2 = 0; i2 < encuentraNum.length; i2++) {
    for (let j2 = 0; j2 < encuentraNum[i2].length; j2++) {
        if (encuentraNum[i2][j2] > numMayor) {
            numMayor = encuentraNum[i2][j2];
        }
    }
}
console.log(numMayor);

// ejercicio 4
const contaPar = [
    [10, 20, 30],
    [5, 15, 25],
    [2, 4, 6]
];
let contadoresDePar = 0;
for (let i4 = 0; i4 < contaPar.length; i4++) {
    for (let j4 = 0; j4 < contaPar[i4].length; j4++) {
        if (contaPar[i4][j4] % 2 === 0) {
            contadoresDePar++;
        }
    }
}
console.log(contadoresDePar);

// ejercicio 5
const sumaFilas = [
    [10, 20, 30],
    [5, 15, 25],
    [2, 4, 6]
];

let sumF = 0;
for (let i5 = 0; i5 < sumaFilas.length; i5++) {
    for (let j5 = 0; j5 < sumaFilas[i5].length; j5++) {
        if(j5 < 1){
            sumF = 0
        }
        sumF = sumF + sumaFilas[i5][j5]
    }
    console.log("Fila numero " + i5 + ",  " + sumF)
}

console.log("Algoritmos con Arrays");+
// ejercicio 1
const numeros1 = [12, 45, 7, 89, 23, 56];
let buscarNumMayor = 0;
for (let i6 = 0; i6 < numeros1.length; i6++) {
    if (buscarNumMayor < numeros1[i6]) {
        buscarNumMayor = numeros1[i6];
    }
}
console.log(buscarNumMayor);

// ejercicio 2
const numeros2 = [34, 12, 56, 8, 91, 23];
let buscarNumMenor = numeros2[0];
for (let k = 0; k < numeros2.length; k++) {
    if (buscarNumMenor > numeros2[k]) {
        buscarNumMenor = numeros2[k];
    }
}
console.log(buscarNumMenor);

// ejercicio 3
const numeros3 = [5, -2, 8, -10, 3, -4, 7];
let numPositivos = 0;
let numNegativos = 0;
for (let t = 0; t < numeros3.length; t++) {
    if (numeros3[t] >= 0) {
        numPositivos++;
    } else {
        numNegativos++;
    }
}
console.log("Numeros Positivos " + numPositivos);
console.log("Numeros Negativos " + numNegativos);

// ejercicio 4
const numeros4 = [1, 2, 3, 4, 5];
for(let numfin = numeros4.length - 1; numfin >= 0; numfin--){
    console.log(numeros4[numfin])
}

// ejercicio 5
const numeros5 = [10, 25, 30, 45, 50];
const buscar = 31;
let numFinal = numeros5.length -1
for (let h = 0; h < numeros5.length; h++) {
    if (numeros5[h] === buscar) {
        console.log("Numero Encontrado:  " + buscar);
        break
    }else if(h == numFinal && numeros5[h] !== buscar ) {
        console.log("Numero No Encontrado")
    }
}