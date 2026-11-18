

// FUNCIONES FLECHA

const saludar = (nombre) => "hola, " + nombre;
console.log(saludar("Pedro"));


const suma = (a, b) => a + b;
console.log(suma(5, 4));


const areaRectangulo = (base, altura) => base * altura;
console.log(areaRectangulo(10, 20));


const numeroPar = (num) =>{
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(numeroPar(5));


const convertirFahrenheit = (celsius) => Fahrenheit = celsius * 9/5 + 32;
console.log(convertirFahrenheit(10));

const numeroMayor = (num1, num2) =>{
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(numeroMayor(5,10));


const calcularIVA = (precio,IVA) => precio*IVA+precio;
console.log(calcularIVA(100,0.05));


const verificarEdad = (edad) =>{
    if(edad >=18){
        return "Eres mayor de edad";
    }else{
        return "Eres menor de edad";
    }
}
console.log(verificarEdad(29));




