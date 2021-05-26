import React, {useContext, useEffect} from 'react';
import Proyecto from './Projecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoProjectos = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

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