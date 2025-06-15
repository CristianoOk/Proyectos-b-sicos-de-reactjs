import react from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({texto, esBotonDeClic, manejarClic}) {
    return (
      <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
        {texto}
      </button>
    )
}

export default Boton;

/*La forma que se muestra acá (en donde no estoy usando "props") se llama sintaxis de desestructuración. Basicamente lo que se hace es escribir un par de llaves, y dentro de estas las propiedades que se estan pasando (en este caso es "texto").
function Boton({texto, esBotonDeClic}) {  //Acá es como que tiene dos "props". "esBotonDeClic", va a ser true or false y dependiendo de su valor se asignará una clase específica.
  return (
    <button
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}> // es como una pregunta "¿es boton de clic? si es entonces se le asigna la clase boton-clic, y si no es el botn de clic (:, estos dos puntos representaría el else) se asigna la clasa boton-reiniciar". En otras palabras si la expresion "esBotonDeClic" es verdadera entonces retorna el valor 'boton-clic', si es falsa se retornará el valor 'boton-reiniciar'.
      {texto}
    </button>
  )
}*/