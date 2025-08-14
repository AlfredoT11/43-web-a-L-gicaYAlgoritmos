// Arreglos
// ¿Cómo crear un arreglo?
// 1. Arreglo vacío
let frutas1 = [];

// 2. Arreglo con el constructor Array.
let frutas2 = Array(5); // Se crea un arreglo con 5 elementos.

// 3. Arreglo con datos
let frutas3 = ["Manzana", "Fresa", "Papaya", "Pera", "Sandía"];

// ¿Cómo acceder a la información de un arreglo?
//                        0        1         2       3         4
// let frutas3 = ["Manzana", "Fresa", "Papaya", "Pera", "Sandía"]; length = 5

// Crear una función que imprima todos los valores de un arreglo.
function mostrarArreglo(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        console.log(`${i} => ${arreglo[i]}`);
    }
}

mostrarArreglo(frutas3);

// ¿Cómo puedo acceder al último elemento de un arreglo?
console.log(`El último elemento del arreglo frutas3 es: ${frutas3[frutas3.length - 1]}`)

// ¿Cómo modificar un valor dentro de un arreglo?
//                                 1         2
// let frutas3 = ["Manzana", "Fresa", "Papaya", "Pera", "Sandía"]; length = 5
console.log(`${frutas3[1]}`);
frutas3[1] = "Frambuesa";
console.log(frutas3);
console.log(`${frutas3[1]}`);


frutas3[10] = "Naranja"; // Como el índice 10 todavía no existe, JS automáticamente llena el arreglo de elementos hasta llegar a ese índice.
console.log(frutas3);
console.log(`${frutas3[10]}`);

// Métodos para modificar un arreglo.
frutas2 = ["Manzana", "Fresa", "Papaya", "Pera", "Sandía"];

// Agregar elementos
console.log("Agregando elementos: ");
console.log(frutas2);
frutas2.push("Naranja", "Frambuesa"); // Me permite agregar elementos AL FINAL de un arreglo.
console.log(frutas2);
frutas2.unshift("Melón", "Aguacate"); // Me permite agregar elementos AL INICIO de un arreglo.
console.log(frutas2);

// Eliminando elementos
console.log("Eliminando elementos: ")
let ultimoElemento = frutas2.pop(); // Elimina EL ÚLTIMO elemento de un arreglo y lo regresa.
console.log(frutas2);
let primerElemento = frutas2.shift(); // Elimina EL PRIMER elemento de un arreglo y lo regresa.
console.log(frutas2);

// Eliminar y agregar elementos al mismo tiempo
/*
    El método splice() recibe al menos 2 parámetros
    1. El índice de inicio donde quiero empezar a hacer cambios.
    2. El número de elementos contiguos a eliminar.

    3.1 Nuevo valor 1 
    3.2 Nuevo valor 2
    3.3 Nuevo valor 3
    ...
    3.n Nuevo valor n
*/
/* 
    Ejemplo: 
             0          1        2         3       4         5          6
    ['Aguacate', 'Manzana', 'Fresa', 'Papaya', 'Pera', 'Sandía', 'Naranja']
    Quiero eliminar 'Fresa' y 'Papaya'
*/
frutas2.splice(2, 2);
console.log(frutas2);

//                   0        1        2         3         4
let nombres1 = ["Juan", "María", "Pedro", "George", "Taylor", "Angela", "Karla", "Elías"];
console.log(nombres1);
nombres1.splice(3, 2, "Jorge", "Tania", "Melani");
console.log(nombres1);

// Cómo copiar arreglos
console.log("--------------------------------------------");
console.log("Copiar arreglos");
let libros1 = ["El Fin de la eternidad", "Hábitos atómicos", "La caída de los gigantes", "Codigo DaVinci"];
let libros2 = libros1; // Asignamos una variable a un tipo de dato complejo.

console.log(`Libros 1: ${libros1}`);
console.log(`Libros 2: ${libros2}`);

libros2.push("Proyecto Hail Mary");

console.log(`Libros 1: ${libros1}`);
console.log(`Libros 2: ${libros2}`);

// Para crear una copia independiente de un arreglo, utilizamos el spread operator.
// spread operator -> ...
let librosCopiaReal = [...libros1];
librosCopiaReal.push("La Guerra de los mundos");
console.log(libros1);
console.log(librosCopiaReal);

let frutas4 = ["Manzana", "Guayaba", "Granada"];
let verduras1 = ["Zanahoria", "Espinaca", "Calabaza"];
let frutasYVerduras = [...frutas4, ...verduras1];
console.log(frutasYVerduras);

console.log("--------------------------------------------");



let numero1 = 50;
let numero2 = numero1;
console.log(numero1);
console.log(numero2);
numero2 = 51;
console.log(numero1);
console.log(numero2);

console.log("--------------------------------------------");
console.log("Métodos de arreglos: ");
let alumnos1 = ["angela", "elías", "José", "lizbeth", "Maycol", "melani", "pedro", "rodrigo"];
// Tarea: Crear un nuevo arreglo donde todos los nombres empiecen con mayúscula.

// El método map() recibe una función como parámetro (callback), este callback
// se ejecuta por cada elemento del arreglo.
// El valor que regrese el callback será un nuevo valor en el nuevo arreglo.
/*
    callback: () => {return 1}
    "angela"    -> 1
    "elías"     -> 1
    "José"      -> 1
    ...
    "rodrigo"   -> 1

    // substring() Es un método que regresa una subcadena.
    0 1 2 3 4 5 6 7 8
    M a y ú s c u l a

        2 - 4

    substring(2, 5) => yús;

    0 1 2 3 4 5 6
    W e l c o m e
          
          3 4 5 6
          c o m e

    inicio = 3;
    finalNoInclusivo = 7;
    substring(inicio, finalNoInclusivo);

    substring(inicio); Si substring solamente recibe un parámetro, automáticamente obtiene la subcadena desde inicio hasta el final de la cadena.

*/

let cadena = "Welcome";
console.log(cadena.substring(3, 7));

let alumnosMayuscula = alumnos1.map((valor) => {
    return `${valor.charAt(0).toUpperCase()}${valor.substring(1)}`;
});
console.log(alumnos1);
console.log(alumnosMayuscula);



/*
["Manzana", "Fresa", "Papaya", "Pera", "Sandía"]
0
    valor => "Manzana"
    "Manzana" === "Papaya" -> false
1
    valor => "Fresa"
    "Fresa" === "Papaya" -> false
2
    valor => "Papaya"
    "Papaya" === "Papaya" -> true
*/
let indicePapaya = frutas3.findIndex((valor) => {return valor === "Papaya"});
console.log(`El índice del valor Papaya es: ${indicePapaya}`);

function encontrarIndice(arreglo, valorABuscar){
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] === valorABuscar){
            return i;
        }
    }
    return -1;
}
console.log(`El índice del valor Papaya es: ${encontrarIndice(frutas3, "Papaya")}`);
console.log("--------------------------------------------");

let mascotas = ["Bowie", "Tigrillo", "Cosa", "Mocka"];
function agregarElemento(arreglo, nuevoValor){
    let valorPrevio = arreglo.find((valor) => valor === nuevoValor);
    if(valorPrevio !== undefined){
        console.log("El valor ya existe");
        return;
    }
    console.log("Agregando el valor");
    arreglo.push(nuevoValor);
}

console.log(mascotas);
agregarElemento(mascotas, "Gruñiz");
console.log(mascotas);
agregarElemento(mascotas, "Cosa");
console.log(mascotas);

