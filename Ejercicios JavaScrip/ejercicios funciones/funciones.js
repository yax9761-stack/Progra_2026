

// FUNCIONES 
// funcion saludar
function saludar(nombre) {
    return "hola, " + nombre;
}
console.log(saludar("Pedro"));


// funcion suma
function suma(a, b) {
    return a + b;
}
console.log(suma(10, 5));


// funcion area de un rectangulo
function areaRectangulo(base, altura) {
    return "El area de un rectangulo es: " +  base * altura;
}
console.log(areaRectangulo(10, 20));


// funcion saber si un numero es par o impar
function numeroPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(numeroPar(2));


// funcion Convertir grados Celsius a Fahrenheit
function convertirFahrenheit(Celsius) {
    return Celsius * 9 / 5 + 32;
}
console.log(convertirFahrenheit(10));


// funcion obtener numero mayor
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(numeroMayor(10,5));


// funcion calcular IVA
function calcularIVA(precio,IVA){
    return (precio * IVA) + precio;
}
console.log(calcularIVA(100,0.05));


// Funcion Mayor o menor de edad
function mayorEdad(edad){
    if(edad >= 18){
        return "Eres mayor de edad";
    }else{
        return "Eres menor de edad";
    }
}
console.log(mayorEdad(22));






