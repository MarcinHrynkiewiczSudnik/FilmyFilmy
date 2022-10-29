let lat;
let long;
let kurs;
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
        );
    }
}



function getWeatherData() {

    let link2 = `http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json`;
    

    fetch(link2).then(function (response1) {
        response1.json().then(function (data1) {

            updateCurrency(data1);
        });
    });

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {

            updateWeatherData(data);
        });
    });

   


function jakiDzien()
    {
    var datax = new Date();
    
    datum = datax.toISOString().slice(0, 10)
   
    dzien = datax.getDay();
        switch(dzien){
            case 0: document.getElementById('dzien_tyg').innerHTML=(`Niedziela ${datum}`); break;
            case 1: document.getElementById('dzien_tyg').innerHTML=(`Poniedziałek ${datum}`); break;
            case 2: document.getElementById('dzien_tyg').innerHTML=(`Wtorek ${datum}`); break;
            case 3: document.getElementById('dzien_tyg').innerHTML=(`Środa ${datum}`); break;
            case 4: document.getElementById('dzien_tyg').innerHTML=(`Czwartek ${datum}`); break;
            case 5: document.getElementById('dzien_tyg').innerHTML=(`Piątek ${datum}`); break;
            case 6: document.getElementById('dzien_tyg').innerHTML=(`Sobota ${datum}`);
        }
        }


        



function updateCurrency(data1){
    const kurs = (Math.round((data1.rates[0].mid)*1000))/1000;
    document.getElementById('waluta').innerHTML = `1 EUR = ${kurs} PLN`;
}


function updateWeatherData(data) {
    const city = data.name;
    const temp = (Math.round(data.main.temp * 10)) / 10;
    const pressure = data.main.pressure;
    const opis_pogody = data.weather[0].main;
    const cloudsPercentage = data.clouds.all;

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

    document.getElementById('pogoda').innerHTML = `miejscowość: ${city} ,  temp: ${temp} °C ,  ciśnienie: ${pressure} hPa , ${opis_polski}`;

    jakiDzien();
}}
