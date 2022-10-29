let lat;
let long;

var timerID = null;

const apiKey = "b380f097cd59d466618f59b2b21a957a";

function startApp() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                getWeatherData();
            }
        )
    }
}

function updateCurrency(res){
    let kurs = res.rates[0].mid;
    document.getElementById('waluta').innerHTML = `1 EUR = ${kurs} PLN`;
}   


function getWeatherData() 
{

   jakiDzien();

    let url2 = "https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json";
    
    fetch(url2)
    .then(res => res.json())
    .then(res => {
        updateCurrency(res);
    });
    
    

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pl&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json()
    .then(response => {
        updateWeatherData(response);
    }))
}


function jakiDzien()
    {
    var datax = new Date();
    
    datum = datax.toLocaleString().slice(0, -10);
   
    dzien = datax.getDay();
        switch(dzien){
            case 0: document.getElementById('dzien_tyg').innerHTML=(`Niedziela ${datum} || `); break;
            case 1: document.getElementById('dzien_tyg').innerHTML=(`Poniedziałek ${datum} || `); break;
            case 2: document.getElementById('dzien_tyg').innerHTML=(`Wtorek ${datum} || `); break;
            case 3: document.getElementById('dzien_tyg').innerHTML=(`Środa ${datum} || `); break;
            case 4: document.getElementById('dzien_tyg').innerHTML=(`Czwartek ${datum} || `); break;
            case 5: document.getElementById('dzien_tyg').innerHTML=(`Piątek ${datum} || `); break;
            case 6: document.getElementById('dzien_tyg').innerHTML=(`Sobota ${datum} || `);
        }
        }

function updateWeatherData(response) {
    const city = response.name;
    const temp = (Math.round(response.main.temp * 10)) / 10;
    const pressure = response.main.pressure;
    const opis_pogody = response.weather[0].description;
    const cloudsPercentage = response.clouds.all;

    switch (opis_pogody) {
        case 'Thunderstorm':
            opis_polski = 'burza'
            break;
        case 'Drizzle':
            opis_polski = 'mżawka'
            break;
        case 'Rain':
            opis_polski = 'deszcz'
            break;
        case 'Snow':
            opis_polski = 'śnieg'
            break;
        case 'Clear':
            opis_polski = 'bezchmurnie'
            break;
        case 'Mist':
            opis_polski = 'mgła'
            break;
        case 'Clouds':
            opis_polski = `zachmurzenie ${cloudsPercentage}%`;
    };

    document.getElementById('pogoda').innerHTML = `miejscowość: ${city} ,  temp: ${temp} °C ,  ciśnienie: ${pressure} hPa , zachmurzenie ${cloudsPercentage} % ( ${opis_pogody} )`;

    
}
