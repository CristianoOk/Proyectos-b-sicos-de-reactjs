import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import {useState} from 'react'; //Hook.
import {evaluate} from 'mathjs'; //Se importa esto para poder evaluar operaciones matemáticas. Este paquete tiene que ser instalado para poder ser llamado (se istala una sola vez y ya podes usarlo en cualquier nuevo proyecto); lo podes instalar accediendo a la terminal (si estas ejecutando este u otro programa, para que nolo pares podes abrir en el mismo terminal un nuevo "PowerShell" presionando en el signo "+" que aparece allí) y colando "npm install mathjs" y listo.

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }; //ese "+", está funcionando como una concatencación.

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input)); //Esta función "evaluate" viene en un paquete de mathjs, que hay que importar de "mathjs"
    }//El "if(input)", quiere decir "si el valor input no es una cadena de caracteres vacía entonces se realiza lo que sigue". Lo podes agregar así ya que exite lo que se llama valores "truthy" y "falsy", que son aquellos que por si solos son verdaderos o falsos; por ejemplo, las cadenas de caracteres vacias son falsas y las cadenas de que no estan vacias son verdaderas, entoces si lo extrapolamos a este ejemplo, si "input" que seria una cadena de caracteres está vacia => no se ejecuta el if, y si no lo está => si ejecuta.
    else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
    
  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div> 
      </div>
    </div>
  );
}

export default App;
 //<BotonClear manejarClic={agregarInput}>Clear</BotonClear> // se esta pasando la función "agregarInput" como prop.