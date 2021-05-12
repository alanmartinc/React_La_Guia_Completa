import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {
  // State de la app
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    if(busqueda === '') return;
    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '21588964-8c9102f5b4a4ebdcabf3a17cb';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarBusqueda(resultado.hits);
    }
    consultarApi();
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;