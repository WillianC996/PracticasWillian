//Fecha de entrega: 13/11/2024
//1
/*
  1. Crea un juego de piedra papel o tijera utilizando
  funciones y ciclos.

  El juego debe permitir al usuario seleccionar una opcion
  y la computadora seleccionara una opcion aleatoria.

  Las opciones son:
  - Piedra
  - Papel
  - Tijera

  Las reglas son:
  - La piedra aplasta la tijera
  - La tijera corta el papel
  - El papel envuelve la piedra

  El juego debe de imprimir quien gano y si el usuario
  desea seguir jugando.

  El juego debe de terminar cuando el usuario seleccione
  que no desea seguir jugando.

  Ademas debes de tener un contador que indique cuantas
  partidas se han jugado, cuantas ha ganado el usuario
  y cuantas la computadora.

  Puedes utilizar la funcion prompt() para obtener la
  seleccion del usuario.

  1. Declaramos una array de objetos con "gana" y "pierde" como parámetro para cada opción (piedra, Papel, tijera)
2. Hacer una selección al azar entre las opciones para la computadora
3. Elegir la opción del usuario con pronto
4. Contar el número de ronda
4. Comparar la selección del usuario con el número random
5. De ser ganador se le suma un punto al usuario, se imprime el mensaje de ganador y se lanza otro promt preguntando si desea continuar 
6. De elegir si, se sube el número de ronda, se muestra la puntuación de cada jugador y se compara de nuevo
7. Cuando elija no, se agradece y rompe el codigo
*/

/**
 *@function piedraPapelTijera - Implementa el juego de piedra, papel o tijera.
 * Permite al usuario jugar contra la computadora y lleva un registro de las puntuaciones.
 */
function piedraPapelTijera (){
  // Definimos las opciones posibles y sus relaciones de ganar y perder.
  const opciones = [
    {nombre:'piedra', gana:'tijera', pierde:'papel'},
    {nombre:'papel', gana:'piedra', pierde:'tijera'},
    {nombre: 'tijera', gana: 'papel', pierde: 'piedra'}
  ];
  // Inicializamos variables para llevar el conteo de rondas y puntuaciones.
  let 
    ronda = 1,
    continuar = true,
    puntuacionComputadora = 0,
    puntuacionUsuario = 0,
    puntuacionEmpate = 0;
  // Bucle principal del juego
  do{
    // La computadora elige una opción al azar.
    const opcionComputadora = opciones[Math.floor(Math.random()*3)].nombre;
    // El usuario elige una opción. Se valida que la opción sea válida.
    let opcionUsuario = prompt(`-- Ronda ${ronda} --\nIngresa una opcion (Piedra, Papel o Tijera):`).toLowerCase();
    if (!opciones.some(opcion => opcion.nombre === opcionUsuario)) {
      opcionUsuario = prompt('Opcion invalida.\nIngresa una opcion (Piedra, Papel o Tijera):').toLowerCase();
    }
    // Se busca el objeto de la opción del usuario para determinar el ganador.
    let objetoElegido = opciones.find(opcion => opcion.nombre === opcionUsuario);
    // Se compara la opción del usuario con la de la computadora y se actualiza la puntuación.
    if (opcionComputadora === objetoElegido.pierde){
      alert(`La computadora eligio ${opcionComputadora}\nPerdiste con ${opcionUsuario}`);
      puntuacionComputadora++;
    } else if (opcionComputadora === objetoElegido.gana){
      alert(`La computadora eligio ${opcionComputadora}\nGanaste con ${opcionUsuario}!`);
      puntuacionUsuario++;
    } else {
      alert(`La computadora tambien eligio ${opcionComputadora}\nEs un empate`);
      puntuacionEmpate++;
    }
    // Se pregunta al usuario si desea continuar jugando.
    let seguir = prompt(`Deseas seguir jugando? (S / N)`).toLowerCase();
    // Se actualiza el contador de rondas y se muestran las puntuaciones.
    if (seguir === 's'){
      alert(`-- puntuaciones --\n Tu: ${puntuacionUsuario}\n Computadora: ${puntuacionComputadora}\n Empates: ${puntuacionEmpate}`);
    } else if (seguir === 'n'){
      alert(`Gracias por jugar!\nJugaste ${ronda} rondas:\nPuntuaciones finales:\n Tu: ${puntuacionUsuario}\n Computadora: ${puntuacionComputadora}\n Empates: ${puntuacionEmpate}`);
      continuar = false;
    } else {
      prompt(`Opcion invalida.\nDeseas seguir jugando? (S / N)`).toLowerCase();
    }
    ronda++;
  } while (continuar)
}
piedraPapelTijera ()

//2
/*
  2. Crea un juego de adivinar un numero aleatorio
  entre 1 y 100.

  El juego debe de permitir al usuario ingresar un numero
  y la computadora debe de generar un numero aleatorio
  entre 1 y 100.

  El juego debe de imprimir si el numero ingresado por
  el usuario es mayor, menor o igual al numero generado
  por la computadora.

  El juego debe de terminar cuando el usuario adivine
  el numero.

  Ademas debes de tener un contador que se reste uno cada
  vez que el usuario ingrese un numero.

  El usuario debe de tener un maximo de 6 intentos para
  adivinar el numero.

1. Primero se elige el numero aleatorio
2. Luego se recibe el imput de el ususario
3. Se valida que el imput sea valido
4. Se compara el imput con el numero aleatorio
5. De ser igual se alerta que el usuario eligio el numero correcto y se resetea el codigo (se pregunta si desea jugar de nuevo)
6. de ser distinto se alerta si el numero aleatorio es menor o mayor al imput y se pide otro imput
7. Se hace el loop un maximo de 6 veces hasta encontrar el numero
8. de no ser encontrado en los 6 intentos se alerta al usuario que perdio y se resetea el codigo (se pregunta si desea jugar de nuevo)
*/

/**
 * @function comparadorNumerico - Implementa un juego de adivinar un número aleatorio entre 1 y 100.
 * El usuario tiene 6 intentos para adivinar el número con pistas respecto al valor.
 */
function comparadorNumerico(){
  // Genera un número aleatorio entre 1 y 100 y lo almacena.
  const numeroRandom = Math.floor(Math.random()*100)+1;
  // Inicializa el contador de rondas e intentos.
  let ronda = 1;
  let intentosMaximos = 6;
  // Bucle principal del juego, se repite hasta que se adivina el número o se agotan los intentos.
  do {
    // Solicita al usuario que ingrese un número y lo convierte a un número flotante.
    let numeroImput = parseFloat(prompt('Ingresa un numero entre 1 y 100'));
    // Valida si el número ingresado es válido (un número entre 1 y 100).
    if ( isNaN(numeroImput) || numeroImput > 100 || numeroImput < 1) {
      // Si el número es inválido, se vuelve a solicitar al usuario.
      alert('Número inválido. Ingresa un número entre 1 y 100:');
      continue; // Vuelve al inicio del bucle sin incrementar la ronda.
    }
    // Compara el número ingresado por el usuario con el número aleatorio.
    if (numeroImput < numeroRandom){
      // Si el número ingresado es menor, informa al usuario y actualiza el contador de intentos.
      alert(`Ronda ${ronda}:\n${numeroImput} es Menor al Numero.\nTe quedan ${intentosMaximos - ronda} intentos.`);
    } else if (numeroImput > numeroRandom){
      // Si el número ingresado es mayor, informa al usuario y actualiza el contador de intentos.
      alert(`Ronda ${ronda}:\n${numeroImput} es Mayor al Numero.\nTe quedan ${intentosMaximos - ronda} intentos.`);
    } else {
      // Si el número ingresado es igual, el usuario ha ganado.
      alert(`Ronda ${ronda}:\n${numeroImput} es el numero correcto, has ganado!`);
      // Si adivinó, se sale del bucle.
      break;
    }
    // Incrementa el contador de rondas.
    ronda++;
  } while (ronda <= intentosMaximos);
  // Si se agotaron los intentos, se informa al usuario que ha perdido y revela el número aleatorio.
  if (ronda > intentosMaximos) {
    alert(`¡Has perdido! ya no te quedan intentos\nEl número era ${numeroRandom}`);
  }
}
comparadorNumerico();

//3
/*
  3. Crea un programa orientado a objetos que sea un gestor
  de tareas.

  El programa debe de tener las siguientes clases:
  - Tarea
    - Propiedades: nombre, descripcion, fecha, completada

  - ListaTareas
    - Propiedades: tareas (array de tareas)
    - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea), 
    ver tareas()

  El programa debe de permitir al usuario agregar tareas,
  completar tareas y eliminar tareas. Ademas debe de permitir
  al usuario ver todas las tareas. 

  El programa debe de tener un menu que permita al usuario
  seleccionar una opcion.

  El programa debe de terminar cuando el usuario seleccione
  salir.

  debes usar alert() y prompt() para interactuar con el usuario.
  
  1. al iniciar el programa mostramos un menu con todas las opciones (agregar, completar, eliminar y ver)
  2. leer y verificar la opcion del usuario
  3. ejecutar la opcion que se elige y mostrat en alert
  4. preguntar si desea regresar al menu o salir
  5.repetir el proceso*/

/**
 * @class Tarea
 * Representa una tarea con un nombre, descripción, fecha de creación y estado de completación.
 */
class Tarea {
  /**
   * Crea una nueva instancia de Tarea.
   * @param {string} nombre - El nombre de la tarea.
   * @param {string} descripcion - Una descripción detallada de la tarea.
   * @param {string} fecha - La fecha de creación de la tarea en formato DD/MM/AAAA.
   * @param {boolean} [completada=false] - Indica si la tarea está completada.
   */
  constructor(nombre, descripcion, fecha, completada = false) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completada = completada;
  }
}

/**
 * @class ListaTareas
 * Gestiona una lista de tareas.
 */
class ListaTareas {
  /**
   * @constructor
   * @param {array} tareas - Lista de tareas disponibles
   */
  constructor(tareas = []) {
    this.tareas = tareas;
  }
  /**
   * @method agregarTarea - Agrega una tarea a la lista 
   */
  agregarTarea(tarea){
    this.tareas.push(tarea);
    alert(`-- AGREGAR TAREA --\nHas agregado una nueva tarea!`);
  }

  /**
   * @method completarTarea - Marca una taea de la lista como completada
   */
  completarTarea(nombreTarea){
    let indice = this.tareas.findIndex(tarea => tarea.nombre.toLowerCase() === nombreTarea.toLowerCase());
    if (indice !== -1) {
    this.tareas[indice].completada = true;
    alert(`-- COMPLETAR TAREA --\nHas marcado '${nombreTarea}' como completada`);
    } else {
    alert(`-- COMPLETAR TAREA --\nNo se encontro la tarea '${nombreTarea}'`);
    }
  }

  /**
   * @method eliminarTarea - Elimina de la lista una tarea seleccionada
   */
  eliminarTarea(nombreTarea){
    let indice = this.tareas.findIndex(tarea => tarea.nombre.toLowerCase() === nombreTarea.toLowerCase());
    if (indice >= 0){
      alert (`-- ELIMINAR TAREA --\nLa tarea ha sido eliminada`);
      this.tareas.splice(indice, 1);
    } else {
      alert (`-- ELIMINAR TAREA --\nNo se encontro la tarea '${nombreTarea}'`);
    }
  }

  /**
   * @method imprimirLista - Le muestra al usuario la lista de tareas vigente 
   */
  verTareas(){
    let imprimirLista = ``;
    let contador = 1;
    for (let tarea of this.tareas){
      imprimirLista += `${contador}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Sin completar"} - ${tarea.fecha}\n  ${tarea.descripcion}\n\n`;
      contador++;
    }
    alert(imprimirLista);
  }
}

let 
tarea1 = new Tarea ('Lavar los platos','lavar los platos sucios del fregadero','8/11/2024'),
tarea2 = new Tarea ('Limpiar el bano','limpiar todo el bano incluyendo las cortinas','9/11/2024'),
tarea3 = new Tarea ('Sacar la basura','Sacar la basura para el basurero','8/11/2024');

let arrayTareas = [tarea1, tarea2, tarea3];
let listaDeTareas = new ListaTareas(arrayTareas);
let fecha = new Date();
let continuar = true;

do{
let opcionMenu = prompt(`-- MENU --\nSelecciona una accion:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir`).toLowerCase()

if(opcionMenu=='agregar' || opcionMenu=='agregar tareas' || opcionMenu=='1'){
  let
    agregarNombre = prompt(`-- AGREGAR TAREA --\nIngresa el nombre de tu tarea:`),
    agregarDescripcion = prompt(`-- AGREGAR TAREA --\nIngresa la descripcion de tu tarea:`),
    agregarFecha = fecha.toLocaleDateString(),
    agregarTarea = new Tarea (agregarNombre, agregarDescripcion, agregarFecha);
  listaDeTareas.agregarTarea(agregarTarea)
}
else if(opcionMenu =='completar' || opcionMenu=='completar tarea' || opcionMenu=='2'){
  let completarNombre = prompt(`-- COMPLETAR TAREA --\nIngresa el nombre de la tarea a completar:`);
  listaDeTareas.completarTarea(completarNombre)
}
else if(opcionMenu =='eliminar' || opcionMenu=='eliminar tarea' || opcionMenu=='3'){
  let eliminarNombre = prompt(`-- ELIMINAR TAREA --\nIngresa el nombre de la tarea que quieres eliminar:`);
  listaDeTareas.eliminarTarea(eliminarNombre)
}
else if(opcionMenu =='ver' || opcionMenu=='ver tareas' || opcionMenu=='4'){
  listaDeTareas.verTareas()
}
else if (opcionMenu =='salir' || opcionMenu=='5'){
  alert(`-- SALIR -- Vuelve pronto!`);
  continuar = false;
}
else{
  opcionMenu = prompt(`-- MENU --\nOpcion no valida, selecciona una accion:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir`).toLowerCase()
}
} while(continuar);
