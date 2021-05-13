import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  // State de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(2);

  useEffect(() => {
    if(busqueda === '') return;
    const consultarApi = async () => {
      const imagenesPorPagina = 14;
      const key = '21588964-8c9102f5b4a4ebdcabf3a17cb';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);
    }
    consultarApi();
  }, [busqueda])

  // Definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  // Definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />

        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}
        >&laquo; Anterior</button>

        <button
          type="button"
          className="bbtn btn-info"
          onClick={paginaSiguiente}
        >Siguiente &raquo;</button>
      </div>
    </div>
  );
}

export default App;