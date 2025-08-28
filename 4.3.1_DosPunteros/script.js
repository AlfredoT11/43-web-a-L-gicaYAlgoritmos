function encontrarSumaDosPunteros(arreglo, x){

    let izq = 0;
    let der = arreglo.length - 1;

    while(izq !== der){
        // 1. Calcular la suma
        let suma = arreglo[izq] + arreglo[der];

        // 2. Determinar si la suma es igual al número que estoy buscando.
        if(suma === x){
            return [izq, der];
        // 3. Si la suma es menor, entonces incrementamos el índice izquierdo.
        }else if(suma < x){
            izq++;
        // 4. Si la suma es mayor, entonces decrementamos el índice derecho.
        }else if(suma > x){
            der--;
        }
    }
    return [-1, -1];
}

let numeros = [1, 2, 3, 5, 7, 10, 15, 16, 21, 32, 50];
let valorObjectivo;
let indicesSuma;

valorObjectivo = 26;
indicesSuma = encontrarSumaDosPunteros(numeros, valorObjectivo);
if(indicesSuma[0] != -1){
    console.log(`La suma de ${numeros[indicesSuma[0]]} y ${numeros[indicesSuma[1]]} es ${valorObjectivo}`);
}else{
    console.log(`No existen un par de números que sumados den: ${valorObjectivo}`);
}

valorObjectivo = 53;
indicesSuma = encontrarSumaDosPunteros(numeros, valorObjectivo);
if(indicesSuma[0] != -1){
    console.log(`La suma de ${numeros[indicesSuma[0]]} y ${numeros[indicesSuma[1]]} es ${valorObjectivo}`);
}else{
    console.log(`No existen un par de números que sumados den: ${valorObjectivo}`);
}

valorObjectivo = 100;
indicesSuma = encontrarSumaDosPunteros(numeros, valorObjectivo);
if(indicesSuma[0] != -1){
    console.log(`La suma de ${numeros[indicesSuma[0]]} y ${numeros[indicesSuma[1]]} es ${valorObjectivo}`);
}else{
    console.log(`No existe un par de números que sumados den: ${valorObjectivo}`);
}

