
// DESTRICTURING ARRAYS


// Para crear varias variables desde el array:

let [k, l] = [10, 20]; // a === 10, b === 20

console.log(k);
console.log(l);

// ó:

let num = [30, 40];

let [i, j] = num; // Como más adelante en un objeto

console.log(i);
console.log(j);





// Para hacer un filtro:

let list = [3, 5, 6];
let [m, , n] = list; // Como la posición intermedia está vacía, no lo toma. => m === 3, n === 6

console.log(m);
console.log(n);

// Para asignar nombres de parámetros a objetos que pasas por una función

function imprime([name, val]) {
    console.log(`${name}, buenos ${val}`);
  }
  imprime(["hola", "dias"]);

// Toma el array que le le mandas por parámetro, lo destructura y lo mete en una variable que se llama 'name' y otra que se llama 'val'. Como se observa en la función, se procesa como independiente. De esta forma, se ve mucho más expresivo a la hora de manejar muchos datos.

// Forma tradicional:

let arr = ['hola','días'];

function imprime2(arr) {
    console.log(`${arr[0]}, buenos ${arr[1]}`);
  }
  imprime2(arr);




// Para incluir valores por defecto, en caso de que no se introduzcan parámetros. Las posiciones van por orden.

let list2 = [33, 2];
let [a = 3, b = 4, c = 5, d] = list2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);












// DESTRUCTURING OBJECTS



// Para crear varias variables desde el objeto:

const user = {
    id: 42,
    is_verified: true,
  };
  
  const { id, is_verified } = user;

  console.log(id);
  console.log(is_verified);




// Para asignar nuevos nombres de variable

const o = { 
    p: 42, 
    q: true 
};

const { p: foo, q: bar } = o;

console.log(foo);
console.log(bar);




// Para incluir valores por defecto:

const { y = 10, z = 5 } = { y: 3 };

console.log(y);
console.log(z);







// SPREAD OPERATOR 

// Toma el array y esparce sus elementos dentro del array al que se incluye. Se puede hacer con varios arrays dentro de un mismo array para unir todos los elementos en un solo array



// Ej. 1
[a, b, ...resto] = [10, 20, 30, 40, 50];
console.log(resto);

// a === 10, b === 20, resto === [30, 40, 50]




// Ej.2: Concatenación de elementos en array

data = [1, 2, 3, 4];
data2 = [9, 8, ...data];
console.log(data2);




// Ej.3

let misConocimientos = [
    "variables",
    "operadores",
    "estructuras de control",
    "funciones",
  ];
let aprendido = ["rest operator", "spread operator"];
let misConocimientosAmpliados = [
    ...misConocimientos,
    ...aprendido,
    "otra cosa más",
  ];
console.log(misConocimientosAmpliados);




// Ej.4: Mergeando objetos

const user1 = {
    name: "Jen",
    age: 22,
  };
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia",
  };
  
const mergedUsers = { ...user1, ...user2 };
  console.log(mergedUsers);

//Mergea las propiedades. Sustituye las propiedades por la más actual, que sería la última que toma







// REST OPERATOR



// Se usa para desestructurar arrays y objetos. En cierto modo, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo.


// Ej.1

function opera(x, y, ...a) { //admite entre 2 y n elements
  return (x + y) * a.length;
};
console.log(opera(2,3,4,3,5));
// Calcula (2 + 3)*3 --> Toma los dos primeros elementos y el resto lo toma como un array de 3 posiciones de longitud



// Ej.2: Suma todos los parámetros que pases

function add(...rest) {
  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}

add(1);
console.log(add(1));
add(1, 2);
console.log(add(1, 2));
add(1, 2, 3, 4, 5);
console.log(add(1, 2, 3, 4, 5));



// Ej.3:

function xyz(x, y, ...z) {
  console.log(x,'', y);

  console.log(z);
  console.log(z[0]);
  console.log(z.length);
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");









// CONDICIONAL TERNARIO


// Es un condicional "if...else" abraviado. Para cuando no hay tanto código o sentencias cortas donde no haya mucha lógica (si no, es hasta más lioso)

// (condición) ? (Code si es true) : (Code si es false)


// Ej.1

let esCliente = true;
console.info("El pago son  " + (esCliente ? "10.00€" : "20.00€"));



//Ej.2: Condicional ternario encadenado

let esCliente2 = false;
let esAdulto2 = false;
console.info(
  esCliente2
    ? "Debes pagar 10.00€"
    : esAdulto2
    ? "Envíe su solicitd"
    : "Sorry, espera a hacerte mayor :)"
);



// Ej.3: Se declaran varias líneas dentro de cada condición. En el ejemplo, se asigna un string a una variable y después se le hace un console.log a la variable

let mensaje, esCliente3 = true; // Se declara 2 variables

esCliente3 ?
((mensaje = "debe pagar 10.00€"), console.info(mensaje))
  : 
((mensaje = "Sebe pagar 20.00€"), console.info(mensaje));









// PARÁMETROS OPCIONALES (POR DEFECTO)

// Para establecer parámetros por defecto a una función:

function f(x, y = 3, z = 22) {
  return x + y + z;
};
console.log(f(2));

// El parámetro 2 corresponde a x, y los demás ya están establecidos por defecto. Si se introducen más parámetros, tomará los introducidos










// BUCLES AVANZADOS



// Distintas formas de hacer lo mismo...
/* 
  for (let i = 0; i < arr.length; ++i)
  arr.forEach((v, i) => { //Codigo aqui })
  for (let i in arr)
  for (const v of arr) 
*/







// FOR_EACH METHOD

// Sirve para iterar solo arrays, y hacer dentro de este lo que se necesite.

// ForEach: Se le pasa la función que se quiere que haga para cada posición y la ejecuta una vez por cada elemento del array.

// La diferencia con MAP es que este devuelve el array transformado, y ForEach no devuelve nada (undefined)

// Sintácticamente son casi iguales ForEach y MAP

// ForEach se usaría cuando solo necesito un console.log


let numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
};

console.log(numbers);







// FOR_IN METHOD

// Es para iterar como FOR, pero le va pasando posiciones a i (índice) automáticamente

// For_in, a diferencia de for_of se usa cuando se necesita i (el índice)

// Para accedes hay que poner la posición del array


//Ej.1

const arra = ["a", "b", "c"];

for (let i = 0; i < arra.length; ++i) {
  console.log(arra[i]);
};

for (let i in arra) {
  console.log(arra[i]);
};




// Ej.3

let arraa = [4, 5, 9];

// Devuelve los índices/claves
for (let i in arraa) {
  console.log(i);
};





// Ej.2: Puede iterar un array de objetos. Aunque los objetos NO son ierables, este método lo hace accediendo a todas sus claves e iterándola una a una

const objeto = { a: 1, b: 2, c: 3 };

for (const elemento in objeto) {
  console.log(`${elemento}: ${objeto[elemento]}`)};

// Aquí para acceder al valor del objeto no se puede poner objeto.elemento (importante ambas formas!!)











// FOR_OF METHOD

// No hay ni que poner el índice... Va extrayendo uno a uno los elementos del array y los va metiendo en cada iteración en una variable que se llama "element"

const arre = ["a", "b", "c"];

for (const element of arre) {
  console.log(element);
};


// Para iterar un array de objetos:

let coches = [{ name: "Peugeot" }, { name: "BMW" }];
for (let element of coches) {
  console.log(element.name);
};









////////// EJERCICIOS DESTRUCTURING //////////



// 1. Dado el siguiente objeto:

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];


// Extrae la empleada Ana completa:

let [empl1, empl2, empl3] = empleados;

let ana = empl2;
console.log(ana);


// Extrae el email del empleado Luis:

let mail_Luis = empl1.email;
console.log(mail_Luis);




// 2. Usa destructuración para intercambiar los valores de r y s

let r = 5, s = 3;
[r, s] = [3, 5];
console.log(r);
console.log(s);




// 3. Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables 'maximaHoy' y 'maximaManana':

/*
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/

// Mediante destructuración:

const { yesterday: maximaAyer, today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);









//////////   EJERCICIOS SPREAD/REST   //////////



// 1. Escribe una función llamada 'sumEveryOther' que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...sum) {
  let total = 0;

  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
}
console.log(sumEveryOther(1, 4, 12));




// 2. Escribe una función llamada 'addOnlyNums' que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums (...add) {
    let total = 0;
    for (let i = 0; i < add.length; i++) {
    if (typeof(add[i]) == "number") {
        total += add[i]
        };
    };
    return total;
}
console.log(addOnlyNums(5,"uno",6,4));




// 3. Escribe una función llamada 'countTheArgs' que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...z) {
  console.log(z.length);
};
countTheArgs("gato", true, "perro", "oso", [23, 44]);




// 4. Escribe una función llamada 'combineTwoArrays' que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

let arr1 = [23, 53, 36, 90], arr2 = [12, 40];

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
};
console.log(combineTwoArrays(arr1, arr2));




// 5. Escriba una función llamada 'onlyUniques' que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

let stuffs = [1, 1, 6, 2, 2, 3, 6, 7, 8, 7]

function onlyUniques() {
    return [...new Set(stuffs)];
};
console.log(onlyUniques());

// El objeto 'set' permite almacenar valores únicos

// Sol. alternativa:

function onlyUniques(...spread) {
  let uniques = []
  spread.forEach(element => {
    if (!uniques.includes(element)) {
      uniques.push(element);
    };
  });
  console.log(uniques);
  return uniques;
};

console.log(onlyUniques(1, 1, 6, 2, 2, 3, 6, 7, 8,7));






// 6. Escriba una función llamada 'combineAllArrays' que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.


function combineAllArrays(...n) {
    let arr = []; 
    for(i = 0; i < n.length; i++) {
        arr = [...arr,...n[i]];
    }
    return arr;
};
console.log(combineAllArrays([1,2,3],[4,5,6],[7,8,9],[10,11,12]));






// 7. Escriba una función llamada 'sumAndSquare' que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...n){
  let sum = 0;
  let square = n.map(function(num) {
      return num * num;
  })
  for (i = 0;i < square.length; i++) {
      sum += square[i];
  };
  return sum;
}
console.log(sumAndSquare(2,4,1,7,4,8,4,2));

// Refactorizado:

function sumAndSquare(...n){
  return n
          .map((num) => num * num)
          .reduce((acc,num)=> acc+num); // devuelve la suma final
}
console.log(sumAndSquare(2,4,1,7,4,8,4,2));