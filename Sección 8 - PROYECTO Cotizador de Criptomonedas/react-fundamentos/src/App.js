import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomenda] = useState('');

  useEffect(() => { 
    const cotizarCriptomoneda = async () => {
      // Evitamos la ejecución la primera vez
      if(moneda === '') return;

      // Consultar la API para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
    }
    cotizarCriptomoneda();

  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomenda={guardarCriptomenda}
        />
      </div>
    </Contenedor>
  );
}

export default App;