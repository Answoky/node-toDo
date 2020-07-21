
const descripccion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer'
};

/* const opts = {
    descripccion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
}

const optsAct = {
    descripccion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea por hacer'
    }
} */

const argv = require('yargs')
.command('crear','Crear un elemento por hacer', {descripccion})
.command('actualizar','Actualiza el estado completado de una tarea', {descripccion,completado})
.command('borrar', 'Borra una tarea por hacer', {descripccion})
.help()
.argv;

module.exports = {
    argv
}