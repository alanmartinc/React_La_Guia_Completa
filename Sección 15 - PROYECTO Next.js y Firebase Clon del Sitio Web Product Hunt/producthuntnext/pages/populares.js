import React from 'react'
import Layout from '../components/layouts/Layout'
import DetallesProductos from '../components/layouts/DetallesProductos'
import useProductos from '../hooks/useProductos'

const Populares = () => {
  const {productos} = useProductos('votos');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                <DetallesProductos
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div> 
  )
}

export default Populares
