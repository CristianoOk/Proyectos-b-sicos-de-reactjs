import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecode-camp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
