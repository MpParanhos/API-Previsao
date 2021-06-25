// Referências do DOM - HTML

const selCidade = document.getElementById('selCidade');
const btnConsultar = document.getElementById('btnConsultar');

const imgTempo = document.getElementById('imgTempo');
const pCity = document.getElementById('pCity');
const pTime = document.getElementById('pTime');
const pDesc = document.getElementById('pDesc');
const pTemp = document.getElementById('pTemp');
const pHumidity = document.getElementById('pHumidity');
const pWind = document.getElementById('pWind');
const pSunrise = document.getElementById('pSunrise');
const pSunset = document.getElementById('pSunset');

const weatherArea = document.getElementById('weatherArea');

// Lógica da aplicação

import apiTempo from '../services/api.js'

function consultaTempo(){
    const cidade = selCidade.value;
    weatherArea.style.display = 'grid';

    apiTempo.get(cidade).then(res=>{
        console.log(res.data.results);
        const { city, time, description, temp, humidity, wind_speedy, sunrise, sunset, condition_slug } = res.data.results;
        console.log(temp);
        displayIcon[condition_slug]();
        pCity.innerHTML = `<img src="./assets/city.png" id="icon"> Cidade: ${city}`
        pTime.innerHTML = `<img src="./assets/clock.png" id="icon"> Horário: ${time}`
        pDesc.innerHTML = `${description}`
        pTemp.innerHTML = `<img src="./assets/thermometer.png" id="icon"> Temperatura: ${temp} &deg;C`
        pHumidity.innerHTML = `<img src="./assets/humidity.png" id="icon"> Humidade do ar: ${humidity} %`
        pWind.innerHTML = `<img src="./assets/wind.png" id="icon"> Vento: ${wind_speedy}`
        pSunrise.innerHTML = `<img src="./assets/sunrise.png" id="icon"> Nascer do sol: ${sunrise}`
        pSunset.innerHTML = `<img src="./assets/sunset.png" id="icon"> Pôr do sol: ${sunset}`
        
    });
}

const displayIcon ={
    storm:()=>{
        imgTempo.setAttribute('src' ,'../assets/tStorm.png');
    },
    snow:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tSnow.png');
    },
    hail:()=>{
        imgTempo.setAttribute('src' ,'../assets/tHail.png');
    },

    rain:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tRain.png');
    },

    fog:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tFog.png');
    },

    clear_day:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tClearDay.png');
    },

    clear_night:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tClearNight.png');
    },

    cloud:()=>{
        imgTempo.setAttribute('src' ,'../assets/tCloud.png');
    },

    cloudly_day:()=>{
        imgTempo.setAttribute('src' ,'../assets/tCloudDay.png');
    },

    cloudly_night:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tCloudNight.png');
    },

    none_day:()=>{ },

    none_night:()=>{ },
}


btnConsultar.onclick = ()=>{
    consultaTempo();
};