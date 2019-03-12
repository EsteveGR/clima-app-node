const axios = require('axios');

const getLugarLatLng = async(dir) => {
    let encodeUlr = encodeURI(dir);

    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': '11400c2bddmsh8b47c916122b801p18c3a7jsn39a781c5aef2' }
    });

    let resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`);
    }

    let data = resp.data.Results[0];
    let direccion = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}