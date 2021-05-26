import React, {useContext, useEffect} from 'react';
import Proyecto from './Projecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoProjectos = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return(
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProjectos;