import './App.css';
import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Producto from './components/Producto'

function App() {
  // Crear listado de productos
  // En los corchetes se pasan o extraen dos valores: 
  // El primero es el state.
  // El segundo es una funcion que te ayuda a re-escribir el state.
  const [productos, guardarProductos] = useState([
    // Valores iniciales
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa VueJS', precio: 40},
    {id: 3, nombre: 'Camisa NodeJS', precio: 30},
    {id: 4, nombre: 'Camisa AngularJS', precio: 20},
  ]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    // Se puede poner Div o Fragment
    <Fragment>
      <Header/>
      <h1>Lista de Productos:</h1>
      {productos.map(producto => (
        <Producto
          // Llave para que sea único 
          key = {producto.id}
          producto = {producto}
        />
      ))}
      <Section titulo="Titulo del texto" descripcion="Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis libero, tellus sociosqu fusce neque vivamus cras tortor sed, mi dictum at commodo ad magna orci curae. Eu risus sem enim ridiculus sociis vivamus fermentum, pretium pharetra mus tellus pellentesque nec dignissim quis, feugiat dis rutrum eros sodales primis. Ullamcorper tincidunt nascetur sagittis montes vitae quis congue massa phasellus, pharetra justo tempus purus dui urna mauris habitasse venenatis aliquam, platea imperdiet sociosqu egestas leo parturient vivamus laoreet."/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;