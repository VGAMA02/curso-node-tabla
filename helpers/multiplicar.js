const { channel } = require('diagnostics_channel');
const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async(base = 5,hasta = 10,listar = false) =>{
    try{
        let salida = '';
        let consola = '';

        for(let i=1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log(consola);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return(`tabla-${base}.txt`);
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
}