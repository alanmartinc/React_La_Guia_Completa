// Forma número uno
import {nombreTarea} from './tareas.js';
console.log(nombreTarea);

// Forma número dos
import urgencia from './tareas.js';
console.log(urgencia);

// Importar una función
import {crearTarea, tareaCompletada} from './tareas.js';
const tarea1 = crearTarea('Conocer a mis suegros', 'Baja');
console.log(tarea1);
tareaCompletada();

/* 
Módulos en ES6:
1) Exportar script
2) Importar script y con el from le decimos el nombre del archivo
3) En el index.html en el script, agregar type="module"
*/