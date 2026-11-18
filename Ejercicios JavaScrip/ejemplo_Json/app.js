const fs = require("fs");

const contenido = fs.readFileSync(
    "estudiante.json",
    "utf8"
);

const estudiante = JSON.parse(contenido);

console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.curso);







