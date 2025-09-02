function encontrarSumaMaxima(arreglo, m){

    // Casos frontera (edge case)
    // 1. ¿Qué pasa si m es mayor que la longitud del arreglo?
    //      R: Regresar la suma de todos los elementos.
    // 2. ¿Qué pasa si m es un número negativo?
    //      Opción 1. Regresar 0.
    //      Opción 2. Convertir el valor negativo a positivo.
    // 3. ¿Qué pasa si los elementos de mi arreglo son negativos?
    //      R: Modificar el valor inicial de sumaMaxima para que el algoritmo soporte negativos.
    // 4. ¿Qué pasa si los elementos de mi arreglo NO son números?
    //      R: Regresar un cero.
    // 5. ¿Qué pasa si m no es un número?
    //      R: Regresar un cero.
    // 6. ¿Qué pasa si m es cero?
    //      R: Regresar un cero.
    // 7. ¿Qué pasa si no hay elementos en el arreglo?
    //      R: Regresar un cero.
    // 8. ¿Qué pasa si m tiene decimales?
    //      R: Redondear al valor entero más cercano.

    // 1. Calcular cuántas sumas tenemos que realizar.
    let numeroSumas = arreglo.length - m + 1;

    let sumaMaxima = 0;
    // 2. Empezamos a recorrer las posibles combinaciones.
    for(let i = 0; i < numeroSumas; i++){
        // 3. Empezamos a calcular las sumas.
        let suma = 0;
        for(let j = i; j < i + m; j++){
            suma += arreglo[j];
        }
        if(suma > sumaMaxima) sumaMaxima = suma;
    }
    return sumaMaxima;
}

let arreglo = [1, 5, 50, 21, 32, 0, 70]; // n = 7
let m = 8;
let sumaMaxima = encontrarSumaMaxima(arreglo, m);
console.log(sumaMaxima);

// Ejemplo de try-catch
// Nosotros no podemos dividir entre cero.
try{
    let a = 5;
    let b = 5;
    if(a - b == 0){
        throw Error("No se puede dividir entre cero");
    }
}catch(error){
    console.log("Ocurrió un error");
    console.log(error);
}
