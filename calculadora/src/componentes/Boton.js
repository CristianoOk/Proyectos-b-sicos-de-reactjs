import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); //Si valor no es un número ("isNaN(valor)", esta función en .js es muy util para confirmar si una cadena de caracteres no es un número), y si valor tampoco es un punto ("(valor != '.')"), y si tampoco es es signo igual ("(valor =! '=')"), entonces lo consideramos como un operador y retornamos el valor "verdadero (true)"; en cambio si cualquiera es falso se retornará el valor "false"
  };

/* Todo lo que está en este comentario hace lo mismo que el pedazo de código que sigue al terminar este comentario.


  if (esOperador(props.children)) {
    return (
      <div
      className='boton-contenedor operador'
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div
      className='botn-contenedor'
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  }
*/
  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;

/*
<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>  //Si esta función "esOperador(props.children)" es verdadera entonces  la clase va a tener el valor " boton-contenedor operador ", y si es false entonces en lugar de la palabra 'operador' seria un espacio vacío.
<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>  //".trimEnd" remueve espacios vacios que se encuentran al final de la cadena de caracteres. Lo nocesito porque la clase de este div, en el caso de ser un operador será "boton-contenedor operador"; y si no es un operador sería "boton-contenedor ...", donde los puntos representan un espacio vacio


<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}> //"() =>" hace referencia a una función anónima, ya que, si no estuviera entonces el onClick reconcoceria "props.manejarClic(props.children)" como una simple cadena de caracteres, aunque sabemos que esa prop es el resultado de una función. Por tal motivo pongo dicha función anonima pra que el onClic reconoza que es una función (en fin, la función anónima retorna el valor de la prop que es el resultado de la función que necesito).
      {props.children}
    </div>
*/