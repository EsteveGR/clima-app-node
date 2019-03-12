const axios = require('axios');

//promesa
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6871a94670b829422977912f898b59aa&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}