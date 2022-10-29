let lat;
let long;
let windDirection;
const apiKey = "b380f097cd59d466618f59b2b21a957a";

// function GetMap() {
//     // navigator.geolocation.getCurrentPosition(
//     //     (position) => {
//     //         let lat = position.coords.latitude;
//     //         let long = position.coords.longitude;
//
//     var map = new Microsoft.Maps.Map('#myMap', {
//         credentials: 'AjJQQP225aTmy-FAAsXsKLL4QN6891w4zL4RRtAVYSS43ePcOSmHH5qrHFrzCGAO',
//         center: new Microsoft.Maps.Location(lat, long),
//         zoom: 17
//     });
//
//     var center = map.getCenter();
//
//     //Create custom Pushpin
//     var pin = new Microsoft.Maps.Pushpin(center, {
//         title: 'Jesteś tutaj',
//         // subTitle: 'City Center',
//         // text: '+'
//     });
//
//     //Add the pushpin to the map
//     map.entities.push(pin);
// }

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

    let but1 = document.getElementById("aktualna");
    but1.onclick = function () {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                getWeatherData();
            })
    }

    let but2 = document.getElementById("dom");
    but2.onclick = function () {
        lat = 54.33449069518185;
        long = 18.627683457891706;
        getWeatherData();
    }

    let but3 = document.getElementById("praca");
    but3.onclick = function () {
        lat = 54.38577347916428;
        long = 18.46979047762709;
        getWeatherData();
    }

    let but4 = document.getElementById("ania");
    but4.onclick = function () {
        lat = 54.577798035365724;
        long = 18.393468483726053;
        getWeatherData();
    }

    let but5 = document.getElementById("ola");
    but5.onclick = function () {
        lat = 52.351933008997285;
        long = 14.562413346483392;
        getWeatherData();
    }

    let but6 = document.getElementById("domek");
    but6.onclick = function () {
        lat = 54.24667452477067;
        long = 17.786862654763265;
        getWeatherData();
    }

    let but7= document.getElementById("wawa");
    but7.onclick = function () {
        lat = 52.22789367194836;
        long = 21.002508251134326;
        getWeatherData();
    }

    let but8 = document.getElementById("nyc");
    but8.onclick = function () {
        lat = 40.77945132429328;
        long = -73.96743043969137;
        getWeatherData();
    }

    let but9 = document.getElementById("ali");
    but9.onclick = function () {
        lat = 38.35359375568836;
        long = -0.4817119168590238;
        getWeatherData();
    }

    let but10 = document.getElementById("kopen");
    but10.onclick = function () {
        lat = 55.68646571272718;
        long = 12.579882151978422;
        getWeatherData();
    }

    let but11 = document.getElementById("rom");
    but11.onclick = function () {
        lat = 41.88980721900133;
        long = 12.492436802104073;
        getWeatherData();
    }

    function getWeatherData() {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pl&appid=${apiKey}`;

        let url_air = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`;

        fetch(url_air).then(function (response1) {
            response1.json().then(function (data1) {
                // console.log(data1);
                updateAirData(data1);
            });
        });

        fetch(url).then(function (response) {
            response.json().then(function (data) {
                updateWeatherData(data);
            });
        });


    }

    function updateAirData(data1) {
        const qualityIndex = data1.list[0].main.aqi;

        switch (qualityIndex) {
            case 1:
                opisIndex = "bardzo dobry";
                break;
            case 2:
                opisIndex = "dobry";
                break;
            case 3:
                opisIndex = "umiarkowany";
                break;
            case 4:
                opisIndex = "zły";
                break;
            case 5:
                opisIndex = "bardzo zły";
                break;
        }

        const pm10Level = data1.list[0].components.pm10;
        const pm25Level = data1.list[0].components.pm2_5;
        const coLevel = data1.list[0].components.co;
        // const noLevel = data1.list[0].components.no;
        const no2Level = data1.list[0].components.no2;
        const o3Level = data1.list[0].components.o3;
        const so2Level = data1.list[0].components.so2;
        const nh3Level = data1.list[0].components.nh3;

        document.getElementById("aIndex").innerHTML = qualityIndex + " ( " + opisIndex + " )";

        document.getElementById("pm10Index").innerHTML = pm10Level + " μg/m\u00B3";
        document.getElementById("pm25Index").innerHTML = pm25Level + " μg/m\u00B3";
        document.getElementById("coIndex").innerHTML = coLevel + " μg/m\u00B3";
        // document.getElementById("noIndex").innerHTML = noLevel + " μg/m\u00B3";
        document.getElementById("no2Index").innerHTML = no2Level + " μg/m\u00B3";
        document.getElementById("o3Index").innerHTML = o3Level + " μg/m\u00B3";
        document.getElementById("so2Index").innerHTML = so2Level + " μg/m\u00B3";
        document.getElementById("nh3Index").innerHTML = nh3Level + " μg/m\u00B3";

    }

    function updateWeatherData(data) {
        let realTime = czas => (czas > 9) ? czas : ("0" + czas);

        const temp = data.main.temp;
        const tempOdcz = data.main.feels_like;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const wS = data.wind.speed;
        const wD = data.wind.deg;
        const cloudsPercentage = data.clouds.all;
        const weatherDescription = data.weather[0].description;
        const city = data.name;
        const country = data.sys.country;
        const sunRise = new Date(data.sys.sunrise * 1000);
        const sunSet = new Date(data.sys.sunset * 1000);
        const tZone = (data.timezone)/60/60;
        const tZoneReady = (tZone > 0) ? ("UTC +" + tZone + ":00") : ("UTC " + tZone + ":00");
        // const update = new Date(data.dt * 1000);

        if (wS <= 0.2) windOpis = "( cisza )";
        if (wS >= 0.3 && wS <= 1.5) windOpis = "( powiew )";
        if (wS >= 1.6 && wS <= 3.3) windOpis = "( słaby )";
        if (wS >= 3.4 && wS <= 5.4) windOpis = "( łagodny )";
        if (wS >= 5.5 && wS <= 7.9) windOpis = "( umiarkowany )";
        if (wS >= 8.0 && wS <= 10.7) windOpis = "( dość silny )";
        if (wS >= 10.8 && wS <= 13.8) windOpis = "( silny )";
        if (wS >= 13.9 && wS <= 17.1) windOpis = "( bardzo silny )";
        if (wS >= 17.2 && wS <= 20.7) windOpis = "( gwałtowny )";
        if (wS >= 20.8 && wS <= 24.4) windOpis = "( wichura )";
        if (wS >= 24.5 && wS <= 28.4) windOpis = "( silna wichura )";


        if (wD >= 0 && wD < 22.5) windDirection = "N ( północny )";
        if (wD >= 22.5 && wD < 67.5) windDirection = "NE ( północno-wschodni )";
        // if (wD >= 45 && wD < 67.5) windDirection = "NE";
        if (wD >= 67.5 && wD < 112.5) windDirection = "E ( wschodni )";
        // if (wD >= 90 && wD < 112.5) windDirection = "E";
        if (wD >= 112.5 && wD < 157.5) windDirection = "SE ( południowo-wschodni )";
        // if (wD >= 135 && wD < 157.5) windDirection = "SE";
        if (wD >= 157.5 && wD < 202.5) windDirection = "S ( południowy )";
        // if (wD >= 180 && wD < 202.5) windDirection = "S";
        if (wD >= 202.5 && wD < 247.5) windDirection = "SW ( południowo-zachodni )";
        // if (wD >= 225 && wD < 247.5) windDirection = "SW";
        if (wD >= 247.5 && wD < 292.5) windDirection = "W ( zachodni )";
        // if (wD >= 270 && wD < 292.5) windDirection = "W";
        if (wD >= 292.5 && wD < 337.5) windDirection = "NW ( północno-zachodni )";
        // if (wD >= 315 && wD < 337.5) windDirection = "NW";
        if (wD >= 337.5 && wD < 360) windDirection = "N ( północny )";

        document.getElementById("zone").innerHTML = tZoneReady;

        document.getElementById("temp").innerHTML = temp + ' \xB0C';
        document.getElementById("tempOdcz").innerHTML = tempOdcz + ' \xB0C';
        document.getElementById("pressure").innerHTML = pressure + " hPa";
        document.getElementById("humidity").innerHTML = humidity + " %";
        document.getElementById("windSpeed").innerHTML = wS + " m/s " + windOpis;
        document.getElementById("windDir").innerHTML = windDirection;
        document.getElementById("cloudsPerc").innerHTML = cloudsPercentage + " % ( " + weatherDescription + " )";
        document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + realTime(sunRise.getMinutes()) + ":" + realTime(sunRise.getSeconds());
        document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + realTime(sunSet.getMinutes()) + ":" + realTime(sunSet.getSeconds());
        // document.getElementById("lastUpdate").innerHTML = update.getHours() + ":" + realTime(update.getMinutes()) + ":" + realTime(update.getSeconds());

        let imgUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

        const locationLink = document.getElementById("locationLink");
        locationLink.innerHTML = city + "  (" + country + ")";
        locationLink.href = `https://openstreetmap.org/#map=16/${lat}/${long}`;
        // locationLink.onclick = function() {
        //     locationLink.href = "mapa.html";
        //     // GetMap(lat, long)};
        //
        //
        //
        //
// }
    }
}