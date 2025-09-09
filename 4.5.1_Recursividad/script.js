// Recursividad: Una función se manda a llamar a sí misma.

/*
    SIEMPRE que trabajemos con una función recursiva tenemos que pensar en la condición de paro.
*/

function saludar(contador){
    console.log(`${contador} ¡Hola!`);
    if(contador < 10){
        saludar(contador + 1);
    }
}

let contador = 0;
saludar(contador);

/*
while(true){
    console.log(`${contador} ¡Hola!`);
    contador++;
}
*/

function a(){
    console.log("1. Inicio función a");
    b();
    console.log("2. Fin función a");
}

function b(){
    console.log("3. Inicio función b");
    c();
    console.log("4. Fin función b");
}

function c(){
    console.log("5. Inicio función c");
    console.log("6. Fin función c");
}

a();

// Función matemática factorial
/*
    5! = 5 * 4 * 3 * 2 * 1
       = 5 * 4!
       = 5 * 4 * 3!
       = 5 * 4 * 3 * 2!
       = 5 * 4 * 3 * 2 * 1!

    8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

    1! = 1
*/

// Utilizando un ciclo for
let x = 5;
let resultado = 1;
for(let i = x; i >= 1; i--){
    resultado *= i;
}
console.log(`El factorial de ${x} es ${resultado}`);

// Utilizando recursividad
function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

let resultadoRecursivo = factorial(x);
console.log(`El factorial de ${x} utilizando recursividad es: ${resultadoRecursivo}`);

/*
    Búsqueda binaria: Es un algoritmo que nos permite buscar un valor dentro de un conjunto de datos ORDENADOS.
    1. 500 Mayor    (1 - 1000)
    2. 750 Mayor    (501 - 1000)
    3. 875 Mayor    (750 - 1000)
    4. 938 Menor    (875 - 1000)
    5. 907 Menor    (875 - 937)
    6. 891 Mayor    (892 - 906)
    7. 899 Menor    (892 - 898)
    8. 895 Mayor    (895 - 898)
    9. 897 Mayor    (898 - 898)
    10. 898 Es el número
*/

/*
     0              4       6   7   8
    [1, 8, 10, 24, 30, 50, 61, 80, 93] l = 9

    valorBuscado = 80

    mitad = (0 + 8) / 2 = 4
    ¿a[4] == valorBuscado?

    mitad = (4 + 8) / 2 = 6
    ¿a[6] == valorBuscado?

    mitad = (6 + 8) / 2 = 7
    ¿a[7] == valorBuscado?
    a[7] = 80
    valorBuscado = 80

    mitad = (inicio + final) / 2;

     0              4       6   7   8
    [1, 8, 10, 24, 30, 50, 61, 80, 93] l = 9
    valorBuscado = 81
    inicio = 0
    final = 8
    mitad = 4
    a[4] = 30
    81 > 30

    inicio = 5
    final = 8
    mitad = (5 + 8)/2 = 6.5 = 6
    a[6] = 61
    81 > 61

    inicio = 7
    final = 8
    mitad = (7 + 8) / 2 = 7.5 = 7
    a[7] = 80
    81 > 80

    inicio = 8
    final = 8
    mitad = (8 + 8)/2 = 8
    a[8] = 93
    81 < 93

    Recorrer el final a la mitad - 1
    inicio = 8
    final = mitad - 1 = 8 - 1 = 7

    inicio > final => 

    1. Si inicio > final => El valor buscado no está en el arreglo.

    2. Si inicio === final && valorBuscado !== a[mitad] => El valor buscado no está en el arreglo.
*/

function busquedaBinaria(arreglo, valorBuscado, inicio, final){
    //1. Calcular la posición de la mitad
    let indiceMitad = Math.floor((inicio + final)/2);

    if(inicio > final){
        return -1;
    }

    if(arreglo[indiceMitad] == valorBuscado){
        return indiceMitad;
    }else if(valorBuscado > arreglo[indiceMitad]){
        return busquedaBinaria(arreglo, valorBuscado, indiceMitad + 1, final);
    }else if(valorBuscado < arreglo[indiceMitad]){
        return busquedaBinaria(arreglo, valorBuscado, inicio, indiceMitad - 1);
    }
}


let arr = [1, 8, 10, 24, 30, 50, 61, 80, 93];
let valorBuscado;
let indiceValor;

valorBuscado = 80;
indiceValor = busquedaBinaria(arr, valorBuscado, 0, arr.length - 1);
if(indiceValor != -1){
    console.log(`El valor ${valorBuscado} está en la posición ${indiceValor}`);
}else{
    console.log(`El valor ${valorBuscado} no existe en el arreglo`);
}

valorBuscado = 81;
indiceValor = busquedaBinaria(arr, valorBuscado, 0, arr.length - 1);
if(indiceValor != -1){
    console.log(`El valor ${valorBuscado} está en la posición ${indiceValor}`);
}else{
    console.log(`El valor ${valorBuscado} no existe en el arreglo`);
}