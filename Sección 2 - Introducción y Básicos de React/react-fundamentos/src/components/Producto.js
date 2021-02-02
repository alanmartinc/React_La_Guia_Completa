import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    // Extraer los valores
    const {nombre, precio, id} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            // Copiamos los productos del carrito
            ...carrito,
            ...producto
        ]);
    }

    // Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // Colocar los productos en el state
        agregarProducto(productos);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <h4>{id}</h4>

            {productos
            
            ? (<button type="button" id="comprar" onClick={() => seleccionarProducto(id)}>Comprar</button>)

            : (<button type="button" id="eliminar" onClick={() => eliminarProducto(id)}>Eliminar</button>)
            
            }
        </div>
    );
}

export default Producto;