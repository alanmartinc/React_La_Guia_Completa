import React from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return(
    <Contenedor>
      <Header titulo='Cotizador de Seguros'/>

      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;