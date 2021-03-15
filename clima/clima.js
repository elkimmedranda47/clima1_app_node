const axios = require('axios');


const getClima = async(lat, lng) => {
    // console.log(`lan: ${lat} lon: ${lon}`);
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a5354448e12e72d440445213a7478c51`)

    if (resp.cod === 400) {
        throw new Error(`No hay resultados para lat: ${lat} y lon:  ${lng}`);
    }
    return resp.data.main.temp;



}

module.exports = {
    getClima
}