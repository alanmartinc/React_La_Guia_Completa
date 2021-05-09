import React, {Fragment, useState} from 'react';

const useMoneda = () => {
    // State de nuestro custom hook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="AR">Peso Argentino</option>
            </select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;