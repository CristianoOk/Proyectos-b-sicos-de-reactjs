import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'; //Se importa el HOOK "useState" del paquete "react"

function App() {

  const [numClics, setNumClics] = useState(0); //El cero que está entre parentesis, es el valor inicial del contador.
  const manejarClic = () => {
    //console.log('Clic'); // Muestra el mensaje "Clic" en la consola del navegador que uses.
    setNumClics(numClics +1);
  }
  const reiniciarContador = () => {
    //console.log('Reiniciar')
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'> 
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} /> 
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;


/*
<div clssName='contador-principal'> 
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />  //Lo que está dentro de llaves es la función a la que se llama (que está definida más arriba), y lo que devuelva dicha función se guarda en "manejarClic" (que estaria funcionando como "props" para una función en el archivo Boton.js). Si te das cuenta no necesariamente tienen que llevar el mismo nombre, es una coincidencia; pudo haber sido "ClicMasterjajaj={manejarClic}", pero bueno en dicho caso tendrias que cambiar en el archivo "Boton.js" tamabien el nombre.
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>



      const [numClics, numClics] = useState(0); //Esta constante es un arreglo con dos elementos importantes, el primero "numClics" que guarda el valor en si (o sea, el estado), y "numClics" seria la función que permite actualizarlo.

       <Contador numClics={numClics} /> //Estoy pasando com props "numClics"
*/