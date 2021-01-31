// Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

// Crear una nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());