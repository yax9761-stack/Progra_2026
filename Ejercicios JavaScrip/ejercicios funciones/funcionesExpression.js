

// FUNCIONRD EXPRESSION


const saludar = function(nombre){
    return "hola, " + nombre;
}
console.log(saludar("Pedro"));

const suma = function(a,b){
    return a + b
}
console.log(suma(5,4));

const areaRectangulo = function(base,altura){
    return base * altura;
}
console.log(areaRectangulo(5,10));

const numeroPar = function(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(numeroPar(5));

const convertirFahrenheit =function(Celsius){
    let Fahrenheit = Celsius * 9/5 + 32;
    return Fahrenheit;
}
console.log(convertirFahrenheit(10));

const numeroMayor =function(num1,num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(numeroMayor(12,53));

const precioIVA = function(precio,IVA){
    let total = precio * IVA + precio;
    return total;
}
console.log(precioIVA(100,0.05));

const verificarEdad = function(edad){
    if(edad>= 18){
        return "Eres mayor de edad"
    }else{
        return "Eres menor de edad"
    }
}
console.log(verificarEdad(12))







