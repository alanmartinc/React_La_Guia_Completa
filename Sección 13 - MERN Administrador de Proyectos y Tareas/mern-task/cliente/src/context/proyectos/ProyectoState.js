import React, {useReducer} from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import {FORMULARIO_PROYECTO} from '../../types';

const ProyectoState = props => {
    const initialState = {
        proyectos : [
            {id: 1, nombre: 'Tienda Virtual'},
            {id: 2, nombre: 'Intranet'},
            {id: 3, nombre: 'Diseño de Sitio Web'},
            {id: 4, nombre: 'MERN'}
        ],
        formulario : false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;