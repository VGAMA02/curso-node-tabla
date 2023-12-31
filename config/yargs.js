const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe: 'Es la base de la tabla ded multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default:false,
        describe: 'Indica hasta que numero se va a multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default:false,
        describe: 'Muestra la tabla en la consola'
    })
    .check((argv,options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        if(isNaN(argv.h)){
            throw 'el valor hasta tiene que ser un numero'
        }
        return true
    }).argv

module.exports = argv;