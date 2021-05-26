import React, {useContext} from 'react';
import Proyecto from './Projecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoProjectos = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos} = proyectosContext;

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null;

    return(
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProjectos;