const clima = require('./clima/clima')
const lugar = require('./lugar/lugar')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        cemand: true
    }
}).argv;

//argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// //resolucion promesa
// clima.getClima(41.849998, 3.130000)
//     .then(console.log)
//     .catch(console.log);

//api.openweathermap.org/data/2.5/weather?lat=35&lon=139

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        //console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        //console.log(temp);
        return `El clima de ${coords.direccion} es de ${temp}ºC`;
    } catch (e) {
        `No se pudo obtener el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);