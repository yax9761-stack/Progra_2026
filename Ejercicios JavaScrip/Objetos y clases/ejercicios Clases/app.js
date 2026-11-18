console.log("Clase Persona")
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Ana", 20)
console.log(persona1);

console.log("Clase Perro");
class Perro {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
    ladrar() {
        console.log("!Guau, guau!");
    }
}

const miPerro = new Perro("Max", "Pitbull");
console.log(miPerro);
miPerro.ladrar();


console.log("Clase Estudiante");
class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
}

const carlos = new Estudiante("Carlos", 70);
console.log(carlos);
carlos.nota = 90;
console.log("Nota actualizada: ", carlos);


console.log("Clase Calculadora");
class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sumar() {
        return this.num1 + this.num2
    }
}
const calcularSuma = new Calculadora(10, 5)
console.log("El resultado de la suma es de: ", calcularSuma.sumar())

console.log("Clase Carro");
class Carro {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
}
const carro1 = new Carro("Toyota", 2026, "Azul");
const carro2 = new Carro("Ferrari", 2000, "Amarillo");
console.log("carro 1: ", carro1);
console.log("carro 2: ", carro2);


console.log("Clase VideoJuego")
class VideoJuego {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }
    subirNivel() {
        this.nivel++;
        console.log("Subiste de nivel, ahora estas en el nivel: ", this.nivel);
    }
}


const nivel1 = new VideoJuego("Ciudad Perdida", 1);
nivel1.subirNivel();
nivel1.subirNivel();
console.log(nivel1);


console.log("Clase Matemetica");
class Matemeticas {
    static numDuplicado(num) {
        return num * 2;
    }
}
console.log("Numero Duplicado: ", Matemeticas.numDuplicado(8));



console.log("Clase Animal")
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static respirar() {
        console.log("Esta respirando");
    }
}

class Gato extends Animal {
}
Gato.respirar();


console.log("Clase Empleado");
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
}

const Angel = new Gerente("Angel", 1500, "Contabilidad");
console.log(Angel);



console.log("Clase Animal Heredado");
class NuevoAnimal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    sonido() {
        console.log("Sonido de animal");
    }
}
class NuevoPerro extends NuevoAnimal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
}
class NuevoGato extends NuevoAnimal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
}

const miGato1 = new NuevoGato("Mishi", 4);
const miPerro1 = new NuevoPerro("Maximo", 2);
console.log(miGato1);
miGato1.sonido();
console.log(miPerro1);
miPerro1.sonido();      