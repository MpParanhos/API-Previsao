const apiTempo = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=98811d8a&city_name='
});

export default apiTempo;