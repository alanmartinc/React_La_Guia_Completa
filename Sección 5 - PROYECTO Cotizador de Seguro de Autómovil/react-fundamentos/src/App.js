import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  // Extraer datos
  const {datos} = resumen;

  return(
    <Contenedor>
      <Header titulo='Cotizador de Seguros'/>

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos={datos}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;