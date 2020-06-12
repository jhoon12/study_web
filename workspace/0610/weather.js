const COORDS = 'coords';
const weather = document.querySelector(".js-weather");
const API_KEY = "d14ae0ec3bec76f43f14f016bbfd6909";

function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();  
        }).then(function(json){
           const temperature = json.main.temp;
           const place  = json.name;
           weather.innerText = `${temperature} @ ${place}`;    
        });
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude : latitude,
        // longitude  : longitude
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.lig("Cant access geo location")
}


function askForCoords(){
   
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}


function init(){
    
    loadCoords();
}
init();     