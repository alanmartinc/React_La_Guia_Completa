import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  // State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      http://api.openweathermap.org/data/2.5/weather?q=neuquen,argentina&appid=0f852b668f506025a3ea0b4738a799e2
    }
    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;