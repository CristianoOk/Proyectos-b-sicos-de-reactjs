import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid'; //Para poder asignar una "id" única a cada tarea. Se instaló el paquete "uuid" (con ayuda del terminal, ingresando y cargando "npm insall uuid"), por eso lo importo ahora. Acordate que si necesitas usarlo para otros proyectos ya no teria falta volver a instalarlo, solo deberias importarlo

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => { //La const "manejarCambio" recibe un evento ("e").
    setInput(e.target.value);
  }

  const manejarEnvio = e => { //"e", es un evento distinto que el de arriba.
    e.preventDefault(); //Este método "preventDefault", sirve para que toda la aplicación no se vuelva a cargar cuando se envía el formulario. O sea, para que no se recargue toda la página cuando cargue una new tarea.
    const tareaNueva = {
      id: uuidv4(), //Se llama a uuidv4 para que se asigne un id único.
      texto: input,
      completada: false //Incialmente es false, después se puede actualizar.
    }

    props.onSubmit(tareaNueva); //Esta función será un prop, que nos pasa la función "ListaDeTareas" que esta en "ListaDeTareas.js" 
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;

/*
<form 
className='tarea-formulario'
onSubmit={manejarEnvio}> // Es un event listener que llama a la función "manejarEnvio", cuando se produce una entrega/envío (que es la trudcción directa de "Submit")


onChange={manejarCambio} //Cuando ocurra un cambio (el "onChange" funciona como listener al igual que onClick, pero este en vez de esperar un Click espera un Cambio), se va a llamar a la función "manejarCambio".
*/