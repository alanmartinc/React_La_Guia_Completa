import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Tarea = ({tarea}) => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    // Obtener la función del context de tarea
    const tareasContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas} = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;

    // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    return(
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                ? 
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )

                :   (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;