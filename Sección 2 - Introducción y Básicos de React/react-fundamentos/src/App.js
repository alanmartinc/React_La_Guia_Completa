import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

function App() {
  // Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    // Se puede poner Div o Fragment
    <Fragment>
      <Header/>
      <Section titulo="Titulo del texto" descripcion="Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis libero, tellus sociosqu fusce neque vivamus cras tortor sed, mi dictum at commodo ad magna orci curae. Eu risus sem enim ridiculus sociis vivamus fermentum, pretium pharetra mus tellus pellentesque nec dignissim quis, feugiat dis rutrum eros sodales primis. Ullamcorper tincidunt nascetur sagittis montes vitae quis congue massa phasellus, pharetra justo tempus purus dui urna mauris habitasse venenatis aliquam, platea imperdiet sociosqu egestas leo parturient vivamus laoreet."/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
