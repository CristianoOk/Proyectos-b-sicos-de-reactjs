import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'; /*Estoy usando un icono específico de un paquete que instalé, como ya sabrás no hace falta que lo vuelvas a instalar para tus futuros proyectos. Esta sintasis la conseguí en la misma pagina donde te dice como instalarlo*/

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) { //A la función se le estan pasando 5 props. Tenemos un id, para identificar cada tarea de forma única; un texto que se va a mostrar; tenemos si la tarea fué completada o no; y tenemos dos funciones que van a pasarse como props ("completarTarea" y "eliminarTarea")
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'
      onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle  className='tarea-icono'/>
      </div>
    </div>
  )
}

export default Tarea;


/*

<div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}> //La clase de este div será una formada por dos clases (tarea-contenedor completada) o la tendrá la clase "completada". Acordate que si existe un espacio en el nombre de una clase => dicha clase está formada por dos clases, por tal motivo cuando queres escribir el nombre de una clase y tienen un nombre que que se escribe en dos palabras, solemos poner un guión medio insted of el espacio, para evitar confusión.


<div className='tarea-texto'
      onClick={() => completarTarea(id)}> //El onClick necestita que su valor sea una función, por eso defino una función anónima; dicha función se va a ejecutar cuando se accione el onClick, y va a llamar a la función "completarTarea" que ya fué pasada como prop arriba que determina qué se hace si se completa la tarea. La función "completarTarea(id)", recibe como valor el id de la tarea.
        {texto}
      </div>

<div className='tarea-icono'>
        <AiOutlineCloseCircle /> //Estoy haciendo uso del icono que importe del paquete de react que aparece en las primeras lineas de este código.
      </div>
*/