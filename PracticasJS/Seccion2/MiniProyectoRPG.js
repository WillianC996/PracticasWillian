/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje

  Fecha de entrega: 04/11/2024
*/

//definimos la clase personaje
class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, evasion) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.evasion = evasion;
  }
  //metodo de ataque base y evasion %
  atacar(objetivo) {
    let danio = Math.floor(Math.random() * this.ataque) - Math.floor(Math.random() * objetivo.defensa);
    let danioAtk = Math.max(1, danio);
    let probabilidadEvasion = Math.random() * 100;
    if (probabilidadEvasion <= objetivo.evasion) {
      console.log(`${objetivo.nombre} ha esquivado el golpe de ${this.nombre}!`);
      return;
    }
    objetivo.vida -= danioAtk;
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le inflige ${danioAtk} de daño.`);
  }
  //metodo de muerte
  morir() {
    console.log(`${this.nombre} ha caído en combate.`);
  }
}
//definimos tipos de personaje y funciones unicas
//Guerrero
class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, evasion, especial, definitiva){
    super(nombre, vida, ataque, defensa, velocidad, evasion);
    this.especial = especial;
    this.definitiva = definitiva;
  }
  //metodo para saludar
  saludar(){
    return `saludos combatientes, mi nombre es ${this.nombre}`;
  }
  //metodo para ataque especial por clase y evasion %
  ataqueEspecial(objetivo) {
    let danioEspecial = Math.floor(Math.random() * this.especial - Math.floor(Math.random() * objetivo.defensa));
    let probabilidadEvasion = Math.random() * 100;
    if (probabilidadEvasion <= objetivo.evasion) {
      console.log(`${objetivo.nombre} ha esquivado el Espadazo de ${this.nombre}!`);
      return;
    }
    objetivo.vida -= (Math.max(1, danioEspecial));
    console.log(`${this.nombre} lanza un Espadazo a ${objetivo.nombre} y le inflige ${danioEspecial} de daño.`);
  }
  //metodo para ataque definitivo (no se puede esquivar)
  ataqueDefinitivo(objetivo) {
    let danioDefinitivo = {
      nombre: "'Espadon invernal'",
      danio: 90
    }
    objetivo.vida -= (danioDefinitivo.danio - (Math.floor(Math.random() * objetivo.defensa)));
    console.log(`${this.nombre} lanza su habilidad definitiva ${danioDefinitivo.nombre} a ${objetivo.nombre} e inflige ${danioDefinitivo.danio} de daño!`)
  }
}
//Mago
class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, evasion, especial, definitiva){
    super(nombre, vida, ataque, defensa, velocidad, evasion);
    this.especial = especial;
    this.definitiva = definitiva;
  }
  saludar(){
    return `Mis cordiales saludos, mi nombre es ${this.nombre}`;
  }
  ataqueEspecial(objetivo) {
    let danioEspecial = Math.floor(Math.random() * this.especial - Math.floor(Math.random() * objetivo.defensa));
    let probabilidadEvasion = Math.random() * 100;
    if (probabilidadEvasion <= objetivo.evasion) {
      console.log(`${objetivo.nombre} ha esquivado el Ataque Magico de ${this.nombre}!`);
      return;
    }
    objetivo.vida -= (Math.max(1, danioEspecial));
    console.log(`${this.nombre} lanza un Ataque Magico a ${objetivo.nombre} y le inflige ${danioEspecial} de daño.`);
  }
  ataqueDefinitivo(objetivo) {
    let danioDefinitivo = {
      nombre: "'Rayo Arcano'",
      danio: 110
    }
    objetivo.vida -= (danioDefinitivo.danio - (Math.floor(Math.random() * objetivo.defensa)));
    console.log(`${this.nombre} lanza su habilidad definitiva ${danioDefinitivo.nombre} a ${objetivo.nombre} e inflige ${danioDefinitivo.danio} de daño!`)
  }
}
//Arquero
class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, evasion, especial, definitiva){
    super(nombre, vida, ataque, defensa, velocidad, evasion);
    this.especial = especial;
    this.definitiva = definitiva;
  }
  saludar(){
    return `Peleadores, soy ${this.nombre}`;
  }
  ataqueEspecial(objetivo) {
    let danioEspecial = Math.floor(Math.random() * this.especial - Math.floor(Math.random() * objetivo.defensa));
    let probabilidadEvasion = Math.random() * 100;
    if (probabilidadEvasion <= objetivo.evasion) {
      console.log(`${objetivo.nombre} ha esquivado el Flechazo de ${this.nombre}!`);
      return;
    }
    objetivo.vida -= (Math.max(1, danioEspecial));
    console.log(`${this.nombre} lanza un Flechazo a ${objetivo.nombre} y le inflige ${danioEspecial} de daño.`);
  }
  ataqueDefinitivo(objetivo) {
    let danioDefinitivo = {
      nombre: "'Flecha Infernal'",
      danio: 100
    }
    objetivo.vida -= (danioDefinitivo.danio - (Math.floor(Math.random() * objetivo.defensa)));
    console.log(`${this.nombre} lanza su habilidad definitiva ${danioDefinitivo.nombre} a ${objetivo.nombre} e inflige ${danioDefinitivo.danio} de daño!`)
  }
}

//definimos los personajes (modificable)
let mago1 = new Mago ("Merlin", 190, 20, 15, 70, 15, 45, false)
let mago2 = new Mago ("Gandalf", 200, 15, 20, 70, 15, 50, false)
let guerrero1 = new Guerrero ("Nedd", 210, 25, 30, 10, 10, 30, false)
let guerrero2 = new Guerrero ("Yon", 205, 20, 35, 10, 10, 35, false)
let arquero = new Arquero ("Archie", 210, 25, 20, 90, 20, 55, false)

//ponemos a los personajes en un array (agregue a un array para poder agregar mas)
let personajes = [];
personajes.push(guerrero1, mago1, guerrero2, mago2, arquero);

//loop principal
//se declara la ronda (se saluda si es la primera ronda)
let ronda = 1;
while (personajes.filter(p => p.vida > 0).length > 1) {
  console.log(`--- Ronda ${ronda} ---`);
  if (ronda === 1) {
    personajes.forEach(personaje => {
      console.log(personaje.saludar());
    });
  console.log(`Que comience la Batalla \n------------`)
  }
  let personajesVivos = [...personajes];
  //elige orden segun velocidad
personajesVivos.sort((a, b) => {
    let velocidadRandomA = Math.random() * a.velocidad;
    let velocidadRandomB = Math.random() * b.velocidad;
    return velocidadRandomB - velocidadRandomA;
  });
  //Elige objetivo al azar
  for (let personaje of personajesVivos) {
    if (personaje.vida <= 0) continue;
    let objetivosVivos = personajes.filter(p => p.vida > 0 && p !== personaje);
    let objetivo = objetivosVivos[Math.floor(Math.random() * objetivosVivos.length)];
    // Elegir una acción aleatoria
    let acciones = ['basico', 'especial', 'definitiva'];
    let accion = acciones[Math.floor(Math.random() * acciones.length)];
    if (accion === 'especial') {
      personaje.ataqueEspecial(objetivo);
    } else if (accion === 'definitiva'){ //hacemos la definitiva de un solo uso por partida
      if (!personaje.definitiva){
        personaje.ataqueDefinitivo(objetivo);
        personaje.definitiva = true;
      } else {
        console.log(`${personaje.nombre} ha intentado usar el su uataque definitivo sin exito`); //agregamos un ataque base de tomarse la opcion de nuevo
        personaje.atacar(objetivo);
      }
    } else {
      personaje.atacar(objetivo);
    }
    //declaramos la muerte de los personajes
    if (objetivo.vida <= 0) {
      objetivo.morir();
      personajes = personajes.filter(p => p.vida > 0);
    }
  }
  //lanzamos un resumen de cada ronda con la vida restante de los personajes
  console.log(`--- Resumen ---`);
  personajes.forEach(personaje => {
    console.log(`${personaje.nombre} tiene ${personaje.vida} de vida`);
  });
  ronda++;
}

//Definimos y declaramos al ganador
let ganador = personajes.find(p => p.vida > 0);
if (ganador) {
  console.log(`${ganador.nombre} es el ganador del combate!`);
}