// Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear una nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Pasear al Perro', 'Media');
const tarea3 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

console.log(tarea1.nombre);
console.log(tarea1.urgencia);