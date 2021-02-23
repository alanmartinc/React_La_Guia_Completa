import React, {useEffect, useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  // UseEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto) {
      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      // Resetear a false
      guardarCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
        <header>
            <h1>Gasto Semanal</h1>
            <div className="contenido-principal contenido">
              {mostrarPregunta 
              ? ( <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />) 
              : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto}/>
                  </div>

                  <div className="one-half column">
                    <Listado gastos={gastos}/>
                    <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
                  </div>
                </div>
              )
              }
            </div>
        </header>
    </div>
  );
}

export default App;