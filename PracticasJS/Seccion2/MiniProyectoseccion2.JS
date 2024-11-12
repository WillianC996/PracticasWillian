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

function piedraPapelTijera (){
  const opciones = [
    {nombre:'piedra', gana:'tijera', pierde:'papel'},
    {nombre:'papel', gana:'piedra', pierde:'tijera'},
    {nombre: 'tijera', gana: 'papel', pierde: 'piedra'}
  ];
  let 
    ronda = 1,
    continuar = true,
    puntuacionComputadora = 0,
    puntuacionUsuario = 0,
    puntuacionEmpate = 0;
  do{
    const opcionComputadora = opciones[Math.floor(Math.random()*3)].nombre;
    let opcionUsuario = prompt(`-- Ronda ${ronda} --\nIngresa una opcion (Piedra, Papel o Tijera):`).toLowerCase();
    if (!opciones.some(opcion => opcion.nombre === opcionUsuario)) {
      opcionUsuario = prompt('Opcion invalida.\nIngresa una opcion (Piedra, Papel o Tijera):').toLowerCase();
    }
    let objetoElegido = opciones.find(opcion => opcion.nombre === opcionUsuario);
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
    let seguir = prompt(`Deseas seguir jugando? (S / N)`).toLowerCase();
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
function comparadorNumerico(){
  //declaramos la ronda inicial
  let ronda = 1;
  const numeroRandom = Math.floor(Math.random()*100)+1 //se elige un numero random
  do { 
    let numeroImput = parseFloat(prompt('Ingresa un numero entre 1 y 100')); //se pide un numero al usuario
    //se evaluan casos fuera de lo pedido
    if ( isNaN(numeroImput) || numeroImput > 100 || numeroImput < 1) {
      alert('Número inválido. Ingresa un número entre 1 y 100:');
      comparadorNumerico();
    }
    if (numeroImput < numeroRandom){
      alert(`Ronda ${ronda}:\n${numeroImput} es Menor al Numero`);
    } else if (numeroImput > numeroRandom){
      alert(`Ronda ${ronda}:\n${numeroImput} es Mayor al Numero`);
    } else {
      alert(`Ronda ${ronda}:\n${numeroImput} es el numero correcto, has ganado!`);
      comparadorNumerico();
    }
    console.log(numeroRandom)
    ronda++;
  } while (ronda <= 6);
  if (ronda > 6) {
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

class Tarea {
  constructor(nombre, descripcion, fecha, completada = false) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completada = completada;
  }
}

class ListaTareas {
  constructor(tareas = []) {
    this.tareas = tareas;
  }

  agregarTarea(tarea){
    this.tareas.push(tarea);
    alert(`-- AGREGAR TAREA --\nHas agregado una nueva tarea!`);
  }

  completarTarea(nombreTarea){
    let indice = this.tareas.findIndex(tarea => tarea.nombre === nombreTarea);
    if (indice !== -1) {
    this.tareas[indice].completada = true;
    alert(`-- COMPLETAR TAREA --\nHas marcado '${nombreTarea}' como completada`);
    } else {
    alert(`-- COMPLETAR TAREA --\nNo se encontro la tarea '${nombreTarea}'`);
    }
  }

  eliminarTarea(nombreTarea){
    let indice = this.tareas.findIndex(tarea => tarea.nombre === nombreTarea);
    if (indice >= 0){
      alert (`-- ELIMINAR TAREA --\nLa tarea ha sido eliminada`);
      this.tareas.splice(indice, 1);
    } else {
      alert (`-- ELIMINAR TAREA --\nNo se pudo encontrar la tarea`);
    }
  }

  verTareas(){
    this.tareas.forEach((tarea, indice) => {
      alert(`${indice + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Sin completar"}`);
    });
  }
}

let 
tarea1 = new Tarea ('Lavar los platos','lavar los platos sucios del fregadero','8/11/2024'),
tarea2 = new Tarea ('Limpiar el bano','limpiar todo el bano incluyendo las cortinas','9/11/2024'),
tarea3 = new Tarea ('Sacar la basura','Sacar la basura para el basurero','8/11/2024');

let arrayTareas = [tarea1, tarea2, tarea3];
let listaDeTareas = new ListaTareas(arrayTareas);
let fecha = new Date()
let continuar = true;

do{
let opcionMenu = prompt(`-- MENU --\nSelecciona una accion:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir`).toLowerCase()

if(opcionMenu == ('agregar' || 'agregar tareas' || 1)){
  let
    agregarNombre = prompt(`-- AGREGAR TAREA --\nIngresa el nombre de tu tarea:`),
    agregarDescripcion = prompt(`-- AGREGAR TAREA --\nIngresa la descripcion de tu tarea:`),
    agregarFecha = fecha.toLocaleDateString(),
    agregarTarea = new Tarea (agregarNombre, agregarDescripcion, agregarFecha);
  listaDeTareas.agregarTarea(agregarTarea)
}
else if(opcionMenu == ('completar' || 'completar tarea' || 2)){
  let completarNombre = prompt(`-- COMPLETAR TAREA --\nIngresa el nombre de la tarea a completar:`);
  listaDeTareas.completarTarea(completarNombre)
}
else if(opcionMenu == ('eliminar' || 'eliminar tarea' || 3)){
  let eliminarNombre = prompt(`-- ELIMINAR TAREA --\nIngresa el nombre de la tarea que quieres eliminar:`);
  listaDeTareas.eliminarTarea(eliminarNombre)
}
else if(opcionMenu == ('ver' || 'ver tareas' || 4)){
  listaDeTareas.verTareas()
}
else if (opcionMenu == ('salir' || 5)){
  alert(`-- SALIR -- Vuelve pronto!`);
  continuar = false;
  break;
}
else{
  opcionMenu = prompt(`-- MENU --\nOpcion no valida, selecciona una accion:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir`).toLowerCase()
}
let volverMenu = prompt(`Deseas volver al Menu? (S / N)`).toLowerCase();
    if (volverMenu === 'n'){
      alert(`Saliendo de tu lista...\nVuelve pronto!`);
      continuar = false;
    } else if (volverMenu === 'n') {
      continue;
    } else {
      volverMenu = prompt(`Opcion invalida.\nDeseas volver al menu? (S / N)`).toLowerCase();
    }
} while(continuar);
