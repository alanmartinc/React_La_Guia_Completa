import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const Proyecto = ({proyecto}) => {
    // Obtener el state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const {proyectoActual} = proyectosContext;

    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;