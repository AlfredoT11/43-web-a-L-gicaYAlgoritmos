// Declaración: Crear una variable.
let nombre1;
// Asignación: Darle un valor a una variable declarada
nombre1 = "Juan";

// let nombre1 = "Juan"; Con let no podemos redeclarar una variable.
let edad1 = "23";

const GRAVEDAD = 9.81;
// GRAVEDAD = 9; No podemos reasignar una variable creada con const.

// Objeto literal (Diccionarios): Un tipo de dato que nos permite guardar mas de un valor dentro de él y asignare un nombre (clave) a cada valor ese tipo de dato.
let mascota1 = {
    nombre: "Tigrillo",
    edad: 8,
    estaEsterilizado: true,
    humano: {
        nombre: "Malinali",
        contacto: "5510101010"
    },
    hermanos: ["Bowie", "Zoro", "Gruñiz"],
    saludar: () => {
        console.log("Miau");
        console.log(this.nombre);
    },
    saludarTradicional: function (){
        console.log("Miau");
        console.log(this.nombre);
    }
}

// Leer información
console.log(mascota1.nombre); // Opción 1 para acceder a un valor.
console.log(mascota1["edad"]);// Opción 2 para acceder a un valor.


mascota1.edad += 1; // Equivalente a la siguiente sentencia mascota1.edad = mascota1.edad + 1;
console.log(mascota1["edad"]);// Opción 2 para acceder a un valor.

console.log(mascota1.humano.contacto); // Si queremos acceder a un objeto literal interno podemos ir anidando
mascota1.humano.contacto = "5520202020";
console.log(mascota1.humano.contacto);

mascota1.saludar(); // Como la llave saludar es una función, si queremos ejecutarla simplemente escribimos la misma sintaxis que cualquier otra llamada a función.


// Concatenación: Es una operación que nos permite combinar cadenas
console.log("Hola, mi nombre es " + mascota1.nombre + " y tengo " + mascota1.edad + " años.");

// Template strings, Template literals
// `` <- backticks
console.log(`Hola, mi nombre es ${mascota1.nombre} y tengo ${mascota1.edad} años.`);

// Función flecha (arrow function): Es una función anónima debido a que no tiene nombre
// Están pensadas para ser trabajadas y ejecutadas una sola vez, o si no como callbacks (una función dentro de los para2metros de otra función).

// Función tradicional
function nombreFuncion(param1, param2){
    console.log("Soy una función");
    return;
}

// Función flecha
let funcionFlechaSuma = (valor1, valor2) => {
    console.log("Sumando los valores");
    return valor1 + valor2;
};

console.log(funcionFlechaSuma(5, 8));


mascota1.saludar();
mascota1.saludarTradicional();

