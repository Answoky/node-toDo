
/* const argv = require('yargs').argv; */

const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

console.log("argv ", argv);

let comando = argv._[0];
console.log("comando ", comando);


switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripccion);
        console.log("Crear to do, tarea => ", tarea);
        break;
    case 'listar':
        console.log("Listar to do");

        let listado = toDo.getListado();

        for (let tarea of listado) {
            console.log('================================'.green);
            console.log(tarea.descripcion);
            console.log('Estado ', tarea.completado);
            console.log('================================'.green);
        }

        break;
    case 'actualizar':
        console.log("Actualizar una tarea to do");
        let actualizado = toDo.actualizar(argv.descripccion, argv.completado);

        if(actualizado){
            let listado = toDo.getListado();
            console.log('Lista actualizada ', listado);
        } else { 
            console.log('No se pudo actualizar la lista');
        }

        break;
    case 'borrar':
        let borrado = toDo.borrado(argv.descripccion);
        console.log('Borrado ', borrado);
        
        break;
    default:
        console.log("Comando no reconocido");
        break;
}
