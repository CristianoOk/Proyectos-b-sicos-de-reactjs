import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {  //props (propiedades), permite que el nombre, el cargo, el testimonio,etc. que estan dentro de esta función sean variables y no tengan texto fijo.
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}  // En vez de usar comillas simples(''), pongo comillas invertidas (``) para que me permita insertar código de .js dentro de la cadena de caracteres//LOS DOS PUNTOS ES PORQUE LA IMAGEN NO ESTA EN LA CARPETA COMPONENTE, SINO QUE TEIENE QUE SALIR UN NIVEL Y DESPUES BUSACAR EN LA CARPETA "src" LA CARPETA "imagenes", para sacar de esta ultima la imagen referida. SI HUBIERA PUESTO UN SOLO PUNTO LE ESTARIA DICIENDO QUE BUSQUE AL MISMO NIVEL QUE SE ENCUENTRA "Testimonio.js", QUE ESTA DENTRO DE LA CARPETA "COMPONENTES"
      alt='Foto de Juan'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}  
        </p>  
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p> 
      </div>
    </div>
  )
} //"<strong>{props.nombre}</strong> en {props.pais}", strong sirve para decir que decir que es importante y que debe resaltarlo con negrita

export default Testimonio;

/*Estructura sin "props"

function Testimonio() { 
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require('../imagenes/testimonio-Juan.jpg')}  //LOS DOS PUNTOS ES PORQUE LA IMAGEN NO ESTA EN LA CARPETA COMPONENTE, SINO QUE TEIENE QUE SALIR UN NIVEL Y DESPUES BUSACAR EN LA CARPETA "src" LA CARPETA "imagenes", para sacar de esta ultima la imagen referida. SI HUBIERA PUESTO UN SOLO PUNTO LE ESTARIA DICIENDO QUE BUSQUE AL MISMO NIVEL QUE SE ENCUENTRA "Testimonio.js", QUE ESTA DENTRO DE LA CARPETA "COMPONENTES"
      alt='Foto de Juan'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Juan Ance en Suecia</p>
        <p className='cargo-testimonio'>Ingenieria en Software en Spotify</p>
        <p className='texto-testimonio'>Aunque es el mismo cielo y es el mismo sol, son las mismas calles pero yo no soy, no soy el mismo. Y como un turista puedo caminar, descubriendo coasa nuevas al andar; porque estas conmigo, porque estas conmigo empiezo a descubrir las cosas sensillas que antes no viví. La voz del mar y las estrellas que hblan taaanto de tiiii...</p>
      </div>
    </div>
  )
}*/