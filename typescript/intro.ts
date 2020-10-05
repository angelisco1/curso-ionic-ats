let unTexto: string;
unTexto = '4';
// unTexto = 4;

let unNumero = 9;
// unNumero = true;

let cualquierValor: any = 8;
cualquierValor = false;
cualquierValor = [];

let cualquierValor2;
cualquierValor2 = false;
cualquierValor2 = [];

let nombres: Array<string> = ['Ángel', 'Sara', 'Arya', 'Mike'];

let stringYNums: Array<string | number> = [2, '6', 0, '1', '7']

type numAndString = number | string;

let stringYNums2: Array<numAndString> = [2, '6', 0, '1', '7']

type texto = string;

let telefono: [string, number] = ['+34', 678123456];

const serie = {
  titulo: 'The Walking Dead',
  numEpisodios: 200,
  numTemporadas: 7
}

serie.numTemporadas = 8

// serie = {
//   titulo: 'The Walking Dead',
//   numEpisodios: 200,
//   numTemporadas: 8
// }


const apellido = 'Villalba'
let miNombre = 'Me llamo ' + nombres[0]  + '\n y mi apellido es ' + apellido;
let miNombre2 = `Me llamo ${nombres[0]}
          y mi apellido es ${apellido}`;

console.log(miNombre)
console.log('----------')
console.log(miNombre2)


for (let pos in nombres) {
  console.log(nombres[pos])
}

for (let nombre of nombres) {
  console.log(nombre)
}

for (let key in serie) {
  console.log(`${key}: ${serie[key]}`)
}

nombres.forEach((nombre, pos) => {
  console.log(`${pos}: ${nombre}`)
});

// Desestructuracion

const serie2 = {
  titulo: 'The Walking Dead',
  numEpisodios: 200,
  numTemporadas: 7
}

let t = serie2.titulo;
let e = serie2.numEpisodios;
let temp = serie2.numTemporadas;

let { titulo: title, numEpisodios, numTemporadas } = serie2;

console.log(title);

let nombres2: Array<string> = ['Ángel', 'Sara', 'Arya', 'Mike'];

// const [ angel, sara, arya ] = nombres2;
// console.log(angel, sara, arya);

// const [ angel, sara, , mike ] = nombres2;
// console.log(angel, sara, mike);

const [ angel, ...restoNombres ] = nombres2;
console.log(angel)
console.log(restoNombres)


let serie3 = serie2;
serie3.titulo = 'Fear The Walking Dead';
console.log(serie2.titulo)
console.log(serie3.titulo)

let serie4 = { ...serie2 };
serie4.titulo = "Gangland Undercover"
console.log(serie4)
console.log(serie2)

// function getNumLoteria(n1: number, n2: number, n3: number, n4: number, n5: number): string {
function getNumLoteria(...nums: Array<number>): string {
  return nums.join(', ');
}

console.log(getNumLoteria(1, 23, 35, 7, 25))
console.log(getNumLoteria(1, 23, 35, 7, 25, 12))

const nombresMayus = nombres2.map((nombre) => {
  return nombre.toUpperCase() + '!'
})

console.log(nombresMayus);

const nombresConE = nombres2.filter((nombre: string) => {
  return nombre.includes('e');
})

console.log(nombresConE);

const numeros = [1, 2, 3, 4]
const mult = numeros.reduce((acc, num) => {
  return acc *= num;
}, 1);

console.log(mult)

function hideWords(texto: string, words: Array<string> = [], caracter?: string): string {
  caracter = caracter ? caracter : '*';
  return words.reduce((acc, word) => {
    const regExp = new RegExp(word, 'g');
    let nuevoTexto = acc.replace(regExp, caracter.repeat(word.length));
    return nuevoTexto;
  }, texto);
}

console.log(hideWords('En un lugar de la mancha, de cuyo nombre no quiero acordarme...', ['nombre', 'mancha']));
console.log(hideWords('En un lugar de la mancha, de cuyo nombre no quiero acordarme...', ['nombre', 'mancha'], '-'));
// 'En un lugar de la mancha de cuyo ****** no quiero acordarme...'
// 'En un lugar de la ******, de cuyo ****** no quiero acordarme...'



function doble(n1: number): number;
function doble(n1: string): string;

function doble(n1: number | string) {
  if (typeof(n1) == 'number') {
    return n1 * 2;
  } else if(typeof(n1) == 'string') {
    return n1.repeat(2);
  }
}

console.log(doble(3));
console.log(doble('Hola'));

interface Serie {
  titulo: string;
  numEpisodios: number;
  numTemporadas: number;
}

const serie5: Serie = {
  titulo: 'The Leftovers',
  numEpisodios: 100,
  numTemporadas: 3,
  cadena: 'HBO'
}

interface Serie {
  cadena: string
}

class Persona {
  // private nombre: string;
  // private apellido: string;
  // private dni: string;

  // constructor(nombre: string, apellido: string, dni: string) {
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  //   this.dni = dni;
  // }

  constructor(private _nombre: string, public apellido: string, protected dni: string) {}

  get nombre() {
    return this._nombre
  }

  set nombre(newNombre: string) {
    this._nombre = newNombre;
  }

  // getInfoPersona() {

  // }

}

const angelVillalba = new Persona('Ángel', 'Villalba', '765423738D');
const mikeWazowski = new Persona('Mike', 'Wazowski', '765423738D');

angelVillalba.nombre = 'Otro nombre'; // Ejecuta el set
console.log(angelVillalba.nombre); // Ejecuta el get
// console.log(angelVillalba.dni); // Ejecuta el get
console.log(angelVillalba.apellido); // Ejecuta el get

class Profesor extends Persona {
  constructor(nombre: string, apellido: string, dni: string, public asignatura: string) {
    super(nombre, apellido, dni);
  }
}

enum Languages { Spanish = 2, French = 8, English = 4, Germany = 7, Italian };