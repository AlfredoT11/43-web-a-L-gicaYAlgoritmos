console.log("¡Hola mundo desde Nodejs!");
 
/*
    Comando para movernos entre carpetas
    cd <rutaDeCarpeta>
    cd 4.5.1_ManejoDeArchivos

    Comando para ver los archivos de una carpeta
    Windows: 
        dir
    
    Linux/Mac
        ls

    Cómo ejecutar un archivo de js con Nodejs
    node <nombreDelArchivo>.js
    node index.js
*/

/*
    CRUD
    C - Create  - Crear
    R - Read    - Leer
    U - Update  - Actualizar
    D - Delete  - Eliminar
*/

/*
    .log
*/

const fs = require('fs'); // Importa código que nos permite manipular archivos (fs = file system)

// Crear archivo
function crearTxt(rutaArchivo, contenido){
    if(fs.existsSync(rutaArchivo)){
        console.log(`El archivo en la ruta ${rutaArchivo} ya existe`);
    }else{
        fs.writeFileSync(rutaArchivo, contenido);
    }
}

// Leer archivo
function leerTxt(rutaArchivo){
    if(fs.existsSync(rutaArchivo)){
        let contenidoArchivo = fs.readFileSync(rutaArchivo);
        console.log(contenidoArchivo); // Esto imprime el contenido en un Buffer hexadecimal
        console.log(String(contenidoArchivo)); // Convertimo el buffer a una cadena de texto
    }else{
        console.log(`El archivo en la ruta ${rutaArchivo} NO existe`);
    }
}

// Eliminar archivos
function eliminarTxt(rutaArchivo){
    if(fs.existsSync(rutaArchivo)){
        fs.unlinkSync(rutaArchivo);
    }else{
        console.log(`No existe un archivo en la ruta ${rutaArchivo}`);
    }
}

// Modificar un archivo
function modificarArchivo(rutaArchivo, contenidoNuevo){
    if(fs.existsSync(rutaArchivo)){
        fs.appendFileSync(rutaArchivo, '\n');
        fs.appendFileSync(rutaArchivo, contenidoNuevo);
    }else{
        console.log(`No existe un archivo en la ruta ${rutaArchivo}`);
    }
}

crearTxt('./archivos/archivo1.txt', 'Texto 1');
//leerTxt('./archivos/archivo1.txt');
//leerTxt('./archivos/archivo2.txt');
//eliminarTxt('./archivos/archivo1.txt');
//eliminarTxt('./archivos/archivo1.txt');
modificarArchivo('./archivos/archivo1.txt', 'Soy un nuevo texto dentro del archivo');

/*
    Las funciones para crear, eliminar, modificar y leer archivos en nodejs con fs tienen 2 versiones. Una versión síncrona y una versión asíncrona.
*/
