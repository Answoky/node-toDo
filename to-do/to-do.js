
const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return listadoPorHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let posit;
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    
    if(index !== -1){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else { 
        return false;
    }   
}

const borrado = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( (tarea)=> tarea.descripcion === descripcion );
    
    if(index !== -1){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    } else { 
        return false;
    }

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');   
    } catch (error) {
        console.log('Fallo al cargar el archivo, no existia data');
        listadoPorHacer = [];
    }

    console.log('listadoPorHacer ', listadoPorHacer);
    
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=> {

        if(err) throw new Error('No se pudo grabar');

        console.log("Se guardo el archivo ");
        
    })
}


module.exports = {
    crear,
    actualizar,
    borrado,
    getListado,
    guardarDB
}