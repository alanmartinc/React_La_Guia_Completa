import React, {useState} from 'react';

const Formulario = () => {
    return(
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte"></input>
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 300"></input>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"></input>
        </form>
    ) 
}

export default Formulario;