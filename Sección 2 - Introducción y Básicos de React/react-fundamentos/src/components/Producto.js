import React from 'react';

const Producto = ({producto}) => {
    // Extraer los valores
    const {nombre, precio, id} = producto;

    return (
        <div>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <h4>{id}</h4>
        </div>
    );
}
 
export default Producto;