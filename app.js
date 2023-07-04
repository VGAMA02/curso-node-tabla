const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

//console.log(process.argv);
/* console.log(argv); */

console.log('base: yargs',argv.base);

    crearArchivoTabla(argv.base,argv.hasta ,argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.bgCyan,'creado'))
    .catch(err => console.log(err));