const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAity56QgwZT-0DkYS-F0ZTh22hcCkCYYg`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    return {
        direccion: resp.data.results[0].formatted_address,
        lat: resp.data.results[0].geometry.location.lat,
        lng: resp.data.results[0].geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}