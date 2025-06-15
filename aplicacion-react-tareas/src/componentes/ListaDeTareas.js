import React, {useState} from 'react';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea.js';
import TareaFormulario from './TareaFormulario.js';

function ListaDeTareas() {

  const [tareas,setTareas] = useState([]); //Inicialmente "tarea" tiene como estado un arreglo vacío. Después este arreglo, por el código que se escribió más abajo, tendra como elementos objetos; cada objeto definirá la info de cada tarea.

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) { //"trim", es un método que quita los espacios del principio y final de una cadena de caracteres. Recordá que una cadena de caracteres vacia se considera false; en este if basicamente se pregunta si "tarea.texto" es true or false (en el caso de ser true prosigue), => si al quitarle con "trim" los espacios del inicio y del final todavía es una cadena de caracteres entonces los considerará true y seguira con lo que contiene el "if". Todo esto con el fin de que no se agreguen tareas vacías a lista.
      tarea.texto = tarea.texto.trim(); // Para que se borren los espacios del principio y del final, con el fin de tener un texto más "limpio jaja".
      const tareasActualizadas = [tarea, ...tareas]; //La tarea nueva se pone al principio del array, mientras que las anteriores (con el operador spread propio de .js "...", que permite que las tareas anteriores sean parte del array como obejtos individuales de este) se ubican a continuación dentro del array.
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //La cte. "tareasActualizadas" es igual al array filtrado (con ayuda del método "filter"); se está diciendo lo que cumpla la condición que está dentro de los paréntesis va a incluirse en el array, si el id es igual al que se está pidiendo => no se incluirá. 
    setTareas(tareasActualizadas); //Acá al "setTareas" del useState, le pasamos "tareasActualizadas".
  }

  const completarTarea = id => { 
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) { //Si el id de la tarea que estamos procesando es igual al id de la tarea que queremos marcar como completada, o en el caso de que ya esté marcada como completada => desmarcarla.
        tarea.completada = !tarea.completada; //Entonces actualizamos su estado. Recordá que a las tareas las estamos representando com objetos, y estas tienen una propiedad que es "completada" que puede ser true or false. Lo que hacemos acá es cambiar el valor que tenga la tarea, si "tarea.completada" es true entonces la negamos con "!" y cambia su valor de verdad a false.
      }
      return tarea; //Retornamos, 'cause la función "map" necesita que se retorne a value.
    });
    setTareas(tareasActualizadas); //Se actualiza la lista de tareas con este "setTareas", que es parte del hook useState.
  }
  return (
    <>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className='tareas-lista-contenedor'>
      {
        tareas.map((tarea) =>
        <Tarea 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />)
      }
    </div>
    </>
  );
}

export default ListaDeTareas;

/*

    <>
    <TareaFormulario />
    <div className='tareas-lista-contenedor'>
      LISTA DE TAREAS
    </div>
    </>    //"<></>", se denomina fragmento, me sirve para no tener que agregar un contenedor <div></div>. En React si o si tiene que existir un contenedor de este tipo, y como no lo necesito para nada, pero si no lo pongo no me deja trabajar entonces uso este fragmento "<></>". Otra cosa, generalmente tenés que tener un contenedor principal <div></div>, y adentro de este podés tener más divs, pero no te deja poner dos contenedores principales; en el caso de que necesites hacerlo podes usar fragmentos y no te largaría ninngun error, tipo, podés tener dos fragmentos principales, pero no más de un div principal.



    <div className='tareas-lista-contenedor'>
    //Lo que se hace a continuación, es para renderizar una lista de COMPONENTES
      {
        tareas.map((tarea) => //Tomamos el arreglo "tareas" (definido arriba como un estado, en el cual se usa useState) que contendrá todas las tareas, y luego llamamos a la función "map()". map() es un métdodo que va tomar todas esas tareas y las a va a pasar una por una como el argumento para otra función, y va a realizar lo que se especifíca a continuación que se haga con dichas tareas.
        <Tarea //Se crea un componente "Tarea", para cada una de esas tareas en el arreglo. Y vamos a tomar esos datos, la información de esas tareas y para cada una de ellas vamos a crear un componente de react.
          texto={tarea.texto} //Cada una de las tareas tendrá un texto específico. Así que, para representar cada una de esas tareas utilizo un objeto de .js
          completada={tarea.completada} // La tarea va a tener un valor true or false, para el prop "completada"; la prop sería la palabra "completada", pero la que esta después del punto, dentro de las llaves.
          eliminarTarea={eliminarTarea} //Si bien tienen el same name, lo que está del lado izquierdo se va como prop a donde se lo requiera; mientras que lo que está entre llaves es la función a la que llama dicho prop.
          //practicamente todo lo que está acá adentro se toma com props en algun lado/>)
      }
      

//Cuando mostramos una lista de react como la de acá abajo, para que react sepa el orden y no los cambie al actualizarlo, debemos pasar un atributo muy importante de los componentes de react "key".
      {
        tareas.map((tarea) =>
        <Tarea 
          key={tarea.id} //"key", es una forma que tiene react de identificar un elemento en la lista, y tiene que ser único; y como el id es único => lo asigno.
          id={tarea.id} //Este componente que lleva por nombre id, también recibe el id que tiene asignada la tarea; porque "key" no se puede pasar como un prop (o sea, no se puede acceder a "key" en el componente), y dentro de la función "Tarea" que se encuentra en "Tarea.js" se necesita trabajar con el id (ya que, lo recibe como un prop).
          texto={tarea.texto}
          completada={tarea.completada}
        />)
      }
*/