//                             0   1                  2
//                                           0        1
let informacionPersona = ["Juan", 36, ["Perez", "Gomez"]];
let informavionPersona2 = ["María", 38, ["Rosas", "Ramirez"]];

console.log(informacionPersona[2][1]);

let arreglo4Dimensiones =   [
                                "Estoy en la primera dimensión",
                                                                [
                                                                    "Estoy en la segunda dimensión",
                                                                    [
                                                                        "Estoy en la tercera dimensión",
                                                                        ["Estoy en la cuarta dimensión"]
                                                                    ]
                                                                ]
                            ];

console.log(arreglo4Dimensiones[0]);
console.log(arreglo4Dimensiones[1][0]);
console.log(arreglo4Dimensiones[1][1][0]);
console.log(arreglo4Dimensiones[1][1][1][0]);

let persona1 = {
    nombre: "Juan",
    primerApellido: "Pérez",
    segundoApellido: "Gómez",
    edad: 36,
    estaCasado: true
};

let persona2 = {
    nombre: "María",
    primerApellido: "Rosas",
    segundoApellido: "Ramirez",
    edad: 40, 
    estaCasado: false
};

let persona3 = {
    nombre: "Pedro",
    primerApellido: "Pascal",
    segundoApellido: "Cruz",
    edad: 17,
    estaCasado: false
};

// Calcular la edad promedio de las 3 personas.
let personas = [persona1, persona2, persona3];

function calcularPromedioEdad(personas){

    let sumaEdades = 0;
    for(let i=0; i < personas.length; i++){
        sumaEdades += personas[i].edad;
    }
    return sumaEdades/personas.length;
}

console.log(`El promedio de edad de las personas es: ${calcularPromedioEdad(personas)}`);

let persona4 = {
    nombre: "Luis",
    primerApellido: "Pascal",
    segundoApellido: "Cruz",
    edad: 28
};

//personas.push(persona + "4"); ¿Se puede hacer esto?

function calcularPromedioEdadConReduce(personas){

    let edadInicial = 0;
    let sumaEdades = personas.reduce((acumulador, elemento) => {
        console.log(elemento);
        console.log(`El valor del acumulador en este momento es: ${acumulador}`);
        return acumulador + elemento.edad;
    }, edadInicial)
    return sumaEdades / personas.length;
}

console.log(`El promedio de edad de las personas es: ${calcularPromedioEdadConReduce(personas)}`);


// ¿Todas las son mayores de edad?
let todasSonMayoresDeEdad = personas.every((persona) => {return persona.edad >= 18});
if(todasSonMayoresDeEdad){
    console.log("Todas las personas son mayor de edad");
}else{
    console.log("Hay menores de edad en el grupo");
}

// ¿Hay algún mayor de edad en el grupo?
let hayMayoresDeEdad = personas.some((persona) => {return persona.edad >= 18});
if(hayMayoresDeEdad){
    console.log("Hay al menos un mayor de edad");
}else{
    console.log("No hay ningún mayor de edad");
}

let frutas = ["Manzana", "Melón", "Sandía", "Papaya"];
let frutaABuscar = "Melón";
if(frutas.includes(frutaABuscar)){
    console.log(`El arreglo SÍ tiene la fruta: ${frutaABuscar}`);
}else{
    console.log(`El arreglo NO tiene la fruta: ${frutaABuscar}`);
}

frutaABuscar = "Fresa";
if(frutas.includes(frutaABuscar)){
    console.log(`El arreglo SÍ tiene la fruta: ${frutaABuscar}`);
}else{
    console.log(`El arreglo NO tiene la fruta: ${frutaABuscar}`);
}

let personasConPrimerApellidoP = personas.filter((valor) => {
    return valor.primerApellido.charAt(0) === 'P';
});
console.log("Las personas cuyo primer apellido empiece con P son: ");
console.log(personasConPrimerApellidoP);

// Regresa todas las personas que NO estén casadas y que sean mayores de edad.
let personasNoCasadasMenoresDeEdad = personas.filter((persona) => {
    return !persona.estaCasado && persona.edad >= 18;
});
console.log("Personas que no esten casadas y sean mayores de edad");
console.log(personasNoCasadasMenoresDeEdad);

// Regresar una lista de nombres en mayúsculas de todas las personas menores de edad.
let nombresMenoresDeEdadEnMayusculas = personas.filter(persona => { return persona.edad < 18 })
.map((personaMenorDeEdad) => {return personaMenorDeEdad.nombre.toUpperCase()});

console.log(nombresMenoresDeEdadEnMayusculas);

// Ejemplo de 2 filtros.
let personasCuyoPrimerApellidoEmpieceConPYSuPrimerNombreTengaMasDe4Letros = personas.filter((persona) => {
    return persona.primerApellido.charAt(0) === 'P';
})
.filter(persona => {
    return persona.nombre.length > 4;
});
console.log(personasCuyoPrimerApellidoEmpieceConPYSuPrimerNombreTengaMasDe4Letros);