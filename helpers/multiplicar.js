// fileSitem
const fs = require('fs');


const crearArchivoTabla = async( base = 5, listar = false, hasta = 10) => {


    try{
        let salidaTexto = `=============\n Tabla del ${ base }\n=============\n`;
        let salidaConsola = `=============\n`.green.bold + ` Tabla del ${ base }\n`.rainbow + `=============\n`.green.bold;

        for(let numero = 1; numero <= hasta; numero ++){
            salidaTexto +=  `- ${base} x ${numero} = ${base*numero}\n `;
            salidaConsola += `- ${base}`.magenta +` x `.cyan + `${numero}`.magenta + ` = `.cyan + `${base*numero}\n `.brightGreen;
        }
        
        // si listar está pedida en consola aparecerá esto
        if (listar){
            console.log(salidaConsola)
        }
        
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salidaTexto);

        return ` el archivo con la tabla del ${base} ha sido `.dim.bgBrightGreen;

    }catch(error) {
        throw error;
    }

}

module.exports = {
    crearArchivoTabla: crearArchivoTabla
}