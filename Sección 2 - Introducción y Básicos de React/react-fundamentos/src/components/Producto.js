import React from 'react';

const Producto = ({producto}) => {
    // Extraer los valores
    const {nombre, precio, id} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        console.log('Comprando...', id);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <h4>{id}</h4>
            <button type="button" id="comprar" onClick={() => seleccionarProducto(id)}>Comprar</button>
        </div>
    );
}

export default Producto;