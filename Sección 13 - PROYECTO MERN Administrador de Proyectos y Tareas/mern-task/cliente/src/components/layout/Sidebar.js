import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProjectos from '../proyectos/ListadoProjectos';

const Sidebar = () => {
    return(
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NuevoProyecto/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProjectos/>
            </div>
        </aside>
    );
}

export default Sidebar;