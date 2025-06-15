import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';  //Huebiera podido escribir "Testimonio.js" o no, igual va a reconocer que es un componente js.

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Estos es lo que dicen nuestros alumnos</h1>
      <Testimonio 
      nombre='Juan Ance'
      pais='Suecia'
      imagen='Juan'
      cargo='Ingenieria en Software'
      empresa='Spotify'
      testimonio='Aunque es el mismo cielo y es el mismo sol, son las mismas calles pero yo no soy, no soy el mismo. Y como un turista puedo caminar, descubriendo coasa nuevas al andar; porque estas conmigo, porque estas conmigo empiezo a descubrir las cosas sensillas que antes no viví. La voz del mar y las estrellas que hblan taaanto de tiiii...'
      />
      <Testimonio 
      nombre='Fabrizio Ortiz'
      pais='Israel'
      imagen='Martin'
      cargo='Ingenieria en Data Science'
      empresa='Space X'
      testimonio='Escuchas estooo aquí en mi pechoo, es mi corazón que contigo quiera hablaaar, cuando te acercas todo empieza a cambiar y mi corazón de ti se enamora más...'
      />
      <Testimonio 
      nombre='Patricia Ance'
      pais='Inglaterra'
      imagen='Guillermina'
      cargo='Owner'
      empresa='The Salms'
      testimonio='Y su nombre es el SANTO DE ISRAEEEEL, al que habita en las alturas y en la santidad... Para hacer vivir el espiritu humilde y para vivicar el corazón quebrantado'
      />
      </div>
    </div>
  );
}

export default App;
