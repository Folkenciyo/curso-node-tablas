/// Hacer una impresión así en consola

//  5 x 1 = 5
//  5 x 2 = 10
//  5 x 3 = 15
//  5 x 4 = 20
//  5 x 5 = 25
//  5 x 6 = 30
//  5 x 7 = 35
//  5 x 8 = 40
//  5 x 9 = 45
//  5 x 10 = 50


// aqui se encuentran los argumentos de consola
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=')

// IMPORTACIONES

    //Importando la función de multiplicar desde "./helpers/multiplicar.js"
const { crearArchivoTabla } = require('./helpers/multiplicar.js')

    //importando yargs.js from config
const argv = require('./config/yargs.js')

    //importando los colores
let colors = require('colors');
//APP
console.clear();



// const base = 1;

crearArchivoTabla( argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.bold.red, "creado".rainbow))
    .catch(error => console.log(error))