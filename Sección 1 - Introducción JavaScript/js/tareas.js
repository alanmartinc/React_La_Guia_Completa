// Forma número uno
export const nombreTarea = 'Pasear al perro';

// Forma número dos
const urgencia = 'Media';
export default urgencia;

// Exportar una función
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log("La tarea se completó");
}