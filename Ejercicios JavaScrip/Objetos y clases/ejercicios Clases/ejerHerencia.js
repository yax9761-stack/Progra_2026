// Ejercicio 1
console.log("Ejercicio 1")
class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    respirar() {
        console.log("Estoy Respirando");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre)
    }
}
const max = new Perro("Max");
max.respirar();

// Ejercicio 2
console.log("Ejercicio 2")
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

}
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad)
        this.grado = grado
    }
}
const alex = new Estudiante("Alex", 17, "2do")
console.log(alex);

// Ejercicio 3
console.log("Ejercicio 3")
class Vehiculo {
    constructor(marca) {
        this.marca = marca
    }
    arrancar() {
        console.log("Run Run");
    }
}

class Carro extends Vehiculo {
    constructor(marca, puertas) {
        super(marca)
        this.puertas = puertas
    }
}
const carro1 = new Carro("Ferrari", 4);
console.log(carro1);
carro1.arrancar();

// Ejercicio 4
console.log("Ejercicio 4")
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre
        this.salario = salario
    }
    trabajar() {
        console.log("A chambear")
    }
}

class Profesor extends Empleado {
    constructor(nombre, salario, materia) {
        super(nombre, salario)
        this.materia = materia
    }
}
const profe1 = new Profesor("Alejandro", 1500, "Matematicas");
console.log(profe1);
profe1.trabajar();

// Ejercicio 5
console.log("Ejercicio 5")
class Animal2 {
    hacerSonido() {
        console.log("Sonido de animal");
    }
}

class Gato extends Animal2 {
    hacerSonido() {
        console.log("Miau")
    }
}
const gato1 = new Gato()
gato1.hacerSonido()

// Ejercicio 6
console.log("Ejercicio 6")

class Dispositivo {
    constructor(marca) {
        this.marca = marca
    }
    encencer() {
        console.log("Esta encendido")
    }
}
class Celular extends Dispositivo {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo
    }
}

const celular1 = new Celular("Motorola", 2026);
const celular2 = new Celular("Nokia", 1999);
console.log(celular1, celular2)
celular1.encencer()
celular2.encencer();

// Ejercicio 7
console.log("Ejercicio 7")
class Figura {
    descripcion() {
        console.log("Soy una figura geometrica");
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super()
        this.base = base
        this.altura = altura
    }
    Area() {
        return this.base * this.altura
    }
}

const rectangulo1 = new Rectangulo(10, 40);
console.log(rectangulo1.Area())

// Ejercicio 8
console.log("Ejercicio 8")

class Personaje {
    constructor(nombre, vida) {
        this.nombre = nombre
        this.vida = vida
    }
    presentarse() {
        console.log("Hola Jugador mi nombre es: ", this.nombre)
    }
}

class Guerrero extends Personaje {
    constructor(nombre, vida, arma) {
        super(nombre, vida)
        this.arma = arma
    }
    atacar() {
        console.log("Estoy atacando con: ", this.arma);
    }
}

const guerrero1 = new Guerrero("Kratos El devodador de Abuelitas", "10%", "LanzaPapas");
guerrero1.presentarse();
guerrero1.atacar();

// Ejercicio 9
console.log("Ejercicio 9")
class Computadora {
    constructor(marca, ram) {
        this.marca = marca
        this.ram = ram
    }
    mostrarInfo() {
        console.log("La marca de la PC es: ", this.marca, " Y la RAM es: ", this.ram);
    }
}

class Laptop extends Computadora {
    constructor(marca, ram, peso) {
        super(marca, ram)
        this.peso = peso
    }
    mostrarInfo() {
        console.log("La marca de la laptop es: ", this.marca, " Y la RAM es: ", this.ram, "Y el peso es de", this.peso)
    }
}
const laptop1 = new Laptop("HP", "DDR4", 1.44);
laptop1.mostrarInfo()

//Ejercicio 10
console.log("Ejercicio 10")
class Persona1 {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    presentarse() {
        console.log("Hola mi nombre es: ", this.nombre, " y tengo ", this.edad, " años");
    }
}

class Estudiante1 extends Persona1 {
    constructor(nombre, edad, grado) {
        super(nombre, edad)
        this.grado = grado
    }
}

class Profesor1 extends Persona1 {
    constructor(nombre, edad, materia) {
        super(nombre, edad)
        this.materia = materia
    }
}

const instanciaEstudiante = new Estudiante1("Michael", 16, "6to");
console.log(instanciaEstudiante);
instanciaEstudiante.presentarse();

const instanciaProfesor = new Profesor1("Maria", 30, "Fisica");
console.log(instanciaProfesor);
instanciaProfesor.presentarse();


