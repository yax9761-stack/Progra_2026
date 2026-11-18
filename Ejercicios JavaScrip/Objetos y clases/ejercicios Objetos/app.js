console.log("Objeto Persona");
const persona = {
    nombre: "Angel",
    edad: 17,
    ciudad: "Guatemala"
}

for (propiedad in persona) {
    console.log(propiedad + " : " + persona[propiedad]);
}


console.log("")
console.log("Objeto Estudiante")
estudiante = {
    nombre: "Brandon",
    grado: "5to",
    nota: 100
}
console.log("El nombre del estudiante es: " + estudiante.nombre);


console.log("");
console.log("Objeto Carro");
carro = {
    marca: "Toyota",
    color: "Gris"
}
carro.color = "Rojo";
for (propiedadCarro in carro) {
    console.log(propiedadCarro + " : " + carro[propiedadCarro]);
}

console.log("");
console.log("Objeto Animal");
animal = {
    nombre: "Mishito",
    tipo: "Felino"
}
animal.edad = "3 meses";
for (propiedadAnimal in animal) {
    console.log(propiedadAnimal + " : " + animal[propiedadAnimal]);
}

console.log("");
console.log("Objeto Producto");
producto = {
    nombre: "Galletas",
    precio: 15,
    marca: "Suly"
}
delete producto.marca;
for (propiedadProducto in producto) {
    console.log(propiedadProducto + " : " + producto[propiedadProducto]);
}

console.log("");
console.log("Objeto Persona 2");
persona2 = {
    nombre: "Ana",
    saludo: function () {
        console.log("Hola mi nombre es: " + this.nombre);
    }
}
persona2.saludo()

console.log("");
console.log("Objeto Calculadora");

const Calculadora = {
    num1: 14,
    num2: 15,
    sumar: function () {
        console.log("La suma de los 2 numeros es de: ", this.num1 + this.num2)
    }
}
Calculadora.sumar()

console.log("")
console.log("Objeto Estudiante");

const estudiante2 = {
    nombre: "Angel",
    edad: 17,
    grado: "5to"
}

for (propiedadEstudiante in estudiante2) {
    console.log(propiedadEstudiante + " : " + estudiante2[propiedadEstudiante]);
}