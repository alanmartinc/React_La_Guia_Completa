// Importar una clase
import Tarea from './tareas.js';
const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
console.log(tarea1);
tarea1.mostrar();

/* 
Módulos en ES6:
1) Exportar script
2) Importar script y con el from le decimos el nombre del archivo
3) En el index.html en el script, agregar type="module"
*/