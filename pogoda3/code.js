let lat;
let long;
let miasto;
let windOpis;
let accu = 2;
let url;
const apiKey = "b380f097cd59d466618f59b2b21a957a";

function startApp() {
    if (accu !== 0) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    miasto = "";
                    accu = 1;
                    getWeatherData();

                }
            );
        }
    }


        let but1 = document.getElementById("aktualna");
        but1.onclick = function () {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    miasto = "";
                    accu = 0;
                    getWeatherData();
                })
        }

        let but2 = document.getElementById("dom");
        but2.onclick = function () {
            lat = 54.33449069518185;
            long = 18.627683457891706;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but3 = document.getElementById("praca");
        but3.onclick = function () {
            lat = 54.38577347916428;
            long = 18.46979047762709;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but4 = document.getElementById("ania");
        but4.onclick = function () {
            lat = 54.577798035365724;
            long = 18.393468483726053;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but5 = document.getElementById("ola");
        but5.onclick = function () {
            lat = 52.351933008997285;
            long = 14.562413346483392;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but6 = document.getElementById("domek");
        but6.onclick = function () {
            lat = 54.24667452477067;
            long = 17.786862654763265;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but7 = document.getElementById("wawa");
        but7.onclick = function () {
            lat = 52.23187143729752;
            long = 21.00588067054377;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but8 = document.getElementById("nyc");
        but8.onclick = function () {
            lat = 40.78292751220498;
            long = -73.95896824973347;
            miasto = "New York,US";
            accu = 0;
            getWeatherData();
        }

        let but9 = document.getElementById("ali");
        but9.onclick = function () {
            lat = 38.34573665884138;
            long = -0.4861717022075692;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but10 = document.getElementById("kopen");
        but10.onclick = function () {
            lat = 55.68516509576939;
            long = 12.575603544499206;
            miasto = "Copenhagen,DK";
            accu = 0;
            getWeatherData();
        }

        let but11 = document.getElementById("rom");
        but11.onclick = function () {
            lat = 41.88980721900133;
            long = 12.492436802104073;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but12 = document.getElementById("krak");
        but12.onclick = function () {
            lat = 50.05500802275578;
            long = 19.934619577954262;
            miasto = "Krakow,PL";
            accu = 0;
            getWeatherData();
        }

        let but13 = document.getElementById("par");
        but13.onclick = function () {
            lat = 48.858257139266;
            long = 2.2941165178354885;
            miasto = "Paris,FR";
            accu = 0;
            getWeatherData();
        }

        let but14 = document.getElementById("kai");
        but14.onclick = function () {
            lat = 29.979868567019878;
            long = 31.126833923138427;
            miasto = "Giza,EG";
            accu = 0;
            getWeatherData();
        }

        let but15 = document.getElementById("kor");
        but15.onclick = function () {
            lat = 39.62578878951895;
            long = 19.921130821027507;
            miasto = "Corfu,GR";
            accu = 0;
            getWeatherData();
        }

        let but16 = document.getElementById("tok");
        but16.onclick = function () {
            lat = 35.7101622086782;
            long = 139.81047002807682;
            miasto = "Tokyo,JP";
            accu = 0;
            getWeatherData();
        }

        let but17 = document.getElementById("gdsm");
        but17.onclick = function () {
            lat = 54.34854279233344;
            long = 18.65321544461661;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but18 = document.getElementById("sop");
        but18.onclick = function () {
            lat = 54.44583227690732;
            long = 18.57084039039612;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

        let but19 = document.getElementById("gdy");
        but19.onclick = function () {
            lat = 54.51933192603506;
            long = 18.550774019724585;
            miasto = "";
            accu = 0;
            getWeatherData();
        }

    let but20 = document.getElementById("karp");
    but20.onclick = function () {
        lat = 50.775371550200504;
        long = 15.756795820390076;
        miasto = "";
        accu = 0;
        getWeatherData();
    }


    function getWeatherData() {

        if (miasto === "") {url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pl&appid=${apiKey}`}
             else {url = `https://api.openweathermap.org/data/2.5/weather?q=${miasto}&lang=pl&units=metric&appid=${apiKey}`}

        let url_air = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`;

        fetch(url_air).then(function (response1) {
            response1.json().then(function (data1) {
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
        let qualityIndex = data1.list[0].main.aqi;

        function opisAir(opis) {
            if (opis === 1) return " 1 (bardzo dobry)";
            if (opis === 2) return " 2 (dobry)";
            if (opis === 3) return " 3 (umiarkowany)";
            if (opis === 4) return " 4 (zły)";
            if (opis === 5) return " 5 (bardzo zły)";
        }

        const pm10Level = data1.list[0].components.pm10;
        const pm25Level = data1.list[0].components.pm2_5;
        const coLevel = data1.list[0].components.co;
        const noLevel = data1.list[0].components.no;
        const no2Level = data1.list[0].components.no2;
        const o3Level = data1.list[0].components.o3;
        const so2Level = data1.list[0].components.so2;
        const nh3Level = data1.list[0].components.nh3;

        document.getElementById("aIndex").innerHTML = opisAir(qualityIndex);

        document.getElementById("pm10Index").innerHTML = pm10Level + " μg/m\u00B3";
        document.getElementById("pm25Index").innerHTML = pm25Level + " μg/m\u00B3";
        document.getElementById("coIndex").innerHTML = coLevel + " μg/m\u00B3";
        document.getElementById("noIndex").innerHTML = noLevel + " μg/m\u00B3";
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
        let curTime = new Date();
        const sunRise = new Date(data.sys.sunrise * 1000);
        const sunSet = new Date(data.sys.sunset * 1000);
        const tZone = (data.timezone)/60/60;
        let tZoneReady = (tZone > 0) ? ("UTC +" + tZone + ":00") : ("UTC " + tZone + ":00");

        let localHour = (curTime.getHours() + tZone - 2);
        if (localHour >= 24) localHour -= 24;
        if (localHour < 0) localHour += 24;

        (localHour !== 24) ? localTime = localHour + ":" + realTime(curTime.getMinutes()) : localTime = "00:" + realTime(curTime.getMinutes());

        function opisWiatru(pre) {
            if (pre >= 0 && pre < 0.3) return "(cisza)";
            if (pre >= 0.3 && pre < 1.6) return "(powiew)";
            if (pre >= 1.6 && pre < 3.4) return "(słaby)";
            if (pre >= 3.4 && pre < 5.5) return "(łagodny)";
            if (pre >= 5.5 && pre < 8.0) return "(umiarkowany)";
            if (pre >= 8.0 && pre < 10.8) return "(dość silny)";
            if (pre >= 10.8 && pre < 13.9) return "(silny)";
            if (pre >= 13.9 && pre < 17.2) return "(bardzo silny)";
            if (pre >= 17.2 && pre < 20.8) return "(gwałtowny)";
            if (pre >= 20.8 && pre < 24.5) return "(wichura)";
            if (pre >= 24.5 && pre < 28.5) return "(silna wichura)";
        }


        function kieWiatru(dir) {
            if (dir >= 0 && dir < 22.5) return "N (północny)";
            if (dir >= 22.5 && dir < 67.5) return "NE (północno-wschodni)";
            if (dir >= 67.5 && dir < 112.5) return "E (wschodni)";
            if (dir >= 112.5 && dir < 157.5) return "SE (południowo-wschodni)";
            if (dir >= 157.5 && dir < 202.5) return "S (południowy)";
            if (dir >= 202.5 && dir < 247.5) return "SW (południowo-zachodni)";
            if (dir >= 247.5 && dir < 292.5) return "W (zachodni)";
            if (dir >= 292.5 && dir < 337.5) return "NW (północno-zachodni)";
            if (dir >= 337.5 && dir <= 360) return "N (północny)";
        }

        document.getElementById("zone").innerHTML = tZoneReady + " (" + localTime + ")";

        document.getElementById("temp").innerHTML = temp + ' \xB0C';
        document.getElementById("tempOdcz").innerHTML = tempOdcz + ' \xB0C';
        document.getElementById("pressure").innerHTML = pressure + " hPa";
        document.getElementById("humidity").innerHTML = humidity + " %";
        document.getElementById("windSpeed").innerHTML = wS + " m/s " + opisWiatru(wS);
        document.getElementById("windDir").innerHTML = (wS === 0) ? "-" : kieWiatru(wD);
        document.getElementById("cloudsPerc").innerHTML = cloudsPercentage + " %";
        document.getElementById("pogodaOpis").innerHTML = weatherDescription.slice(0,1).toUpperCase() + weatherDescription.slice(1).toLowerCase();
        document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + realTime(sunRise.getMinutes()) + ":" + realTime(sunRise.getSeconds());
        document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + realTime(sunSet.getMinutes()) + ":" + realTime(sunSet.getSeconds());

        let imgUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

        const locationLink = document.getElementById("locationLink");
        locationLink.innerHTML = city + "  (" + country + ")";
        locationLink.href = `https://openstreetmap.org/#map=16/${lat}/${long}`;
    }
}