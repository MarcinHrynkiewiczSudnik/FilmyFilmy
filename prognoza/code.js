let lat;
let long;
let miasto;
let url;
let accu = 2;
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

        if (miasto === "") {url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&lang=pl&cnt=4&appid=${apiKey}`}
             else {url = `https://api.openweathermap.org/data/2.5/forecast?q=${miasto}&units=metric&lang=pl&cnt=4&appid=${apiKey}`}

        fetch(url).then(function (response) {
            response.json().then(function (data) {
                updateWeatherData(data);
            });
        });
    }


    function updateWeatherData(data) {

        let realTime = czas => (czas > 9) ? czas : ("0" + czas);

        const sunRise = new Date(data.city.sunrise * 1000);
        const sunSet = new Date(data.city.sunset * 1000);
        const tZone = (data.city.timezone)/60/60;

        document.getElementById("zone").innerHTML = (tZone > 0) ? ("UTC +" + tZone + ":00") : ("UTC " + tZone + ":00");
        document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + realTime(sunRise.getMinutes()) + ":" + realTime(sunRise.getSeconds());
        document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + realTime(sunSet.getMinutes()) + ":" + realTime(sunSet.getSeconds());

        const godz = new Date(data.list[0].dt * 1000);
        const godz2 = new Date(data.list[1].dt * 1000);
        const godz3 = new Date(data.list[2].dt * 1000);
        const godz4 = new Date(data.list[3].dt * 1000);


        let localHour = (godz.getHours() + tZone - 2);
        if (localHour >= 24) localHour -= 24;
        if (localHour < 0) localHour += 24;

        let localHour2 = (godz2.getHours() + tZone - 2);
        if (localHour2 >= 24) localHour2 -= 24;
        if (localHour2 < 0) localHour2 += 24;

        let localHour3 = (godz3.getHours() + tZone - 2);
        if (localHour3 >= 24) localHour3 -= 24;
        if (localHour3 < 0) localHour3 += 24;

        let localHour4 = (godz4.getHours() + tZone - 2);
        if (localHour4 >= 24) localHour4 -= 24;
        if (localHour4 < 0) localHour4 += 24;

        document.getElementById("godz").innerHTML = godz.getHours() + ":00";
        document.getElementById("locgodz").innerHTML = (tZone !== 2) ? " (" + localHour + ":00)" : "";
        document.getElementById("godz2").innerHTML = godz2.getHours() + ":00";
        document.getElementById("locgodz2").innerHTML = (tZone !== 2) ? " (" + localHour2 + ":00)" : "";
        document.getElementById("godz3").innerHTML = godz3.getHours() + ":00";
        document.getElementById("locgodz3").innerHTML = (tZone !== 2) ? " (" + localHour3 + ":00)" : "";
        document.getElementById("godz4").innerHTML = godz4.getHours() + ":00";
        document.getElementById("locgodz4").innerHTML = (tZone !== 2) ? " (" + localHour4 + ":00)" : "";

        const temp = data.list[0].main.temp;
        const temp2 = data.list[1].main.temp;
        const temp3 = data.list[2].main.temp;
        const temp4 = data.list[3].main.temp;

        const tempOdcz = data.list[0].main.feels_like;
        const tempOdcz2 = data.list[1].main.feels_like;
        const tempOdcz3 = data.list[2].main.feels_like;
        const tempOdcz4 = data.list[3].main.feels_like;

        const pressure_gr = data.list[0].main.grnd_level;
        const pressure2_gr = data.list[1].main.grnd_level;
        const pressure3_gr = data.list[2].main.grnd_level;
        const pressure4_gr = data.list[3].main.grnd_level;

        const pressure_mo = data.list[0].main.sea_level;
        const pressure2_mo = data.list[1].main.sea_level;
        const pressure3_mo = data.list[2].main.sea_level;
        const pressure4_mo = data.list[3].main.sea_level;

        const humidity = data.list[0].main.humidity;
        const humidity2 = data.list[1].main.humidity;
        const humidity3 = data.list[2].main.humidity;
        const humidity4 = data.list[3].main.humidity;

        const wS = data.list[0].wind.speed;
        const wS2 = data.list[1].wind.speed;
        const wS3 = data.list[2].wind.speed;
        const wS4 = data.list[3].wind.speed;

        const wD = data.list[0].wind.deg;
        const wD2 = data.list[1].wind.deg;
        const wD3 = data.list[2].wind.deg;
        const wD4 = data.list[3].wind.deg;

        const cloudsPercentage = data.list[0].clouds.all;
        const cloudsPercentage2 = data.list[1].clouds.all;
        const cloudsPercentage3 = data.list[2].clouds.all;
        const cloudsPercentage4 = data.list[3].clouds.all;

        const weatherDescription = data.list[0].weather[0].description;
        const weatherDescription2 = data.list[1].weather[0].description;
        const weatherDescription3 = data.list[2].weather[0].description;
        const weatherDescription4 = data.list[3].weather[0].description;

        const pop = data.list[0].pop;
        const pop2 = data.list[1].pop;
        const pop3 = data.list[2].pop;
        const pop4 = data.list[3].pop;

        const city = data.city.name;
        const country = data.city.country;


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
            if (dir >= 337.5 && dir < 360) return "N (północny)";
        }

        document.getElementById("temp").innerHTML = temp + ' \xB0C';
        document.getElementById("temp2").innerHTML = temp2 + ' \xB0C';
        document.getElementById("temp3").innerHTML = temp3 + ' \xB0C';
        document.getElementById("temp4").innerHTML = temp4 + ' \xB0C';

        document.getElementById("tempOdcz").innerHTML = tempOdcz + ' \xB0C';
        document.getElementById("tempOdcz2").innerHTML = tempOdcz2 + ' \xB0C';
        document.getElementById("tempOdcz3").innerHTML = tempOdcz3 + ' \xB0C';
        document.getElementById("tempOdcz4").innerHTML = tempOdcz4 + ' \xB0C';

        document.getElementById("pressure_gr").innerHTML = pressure_gr + " hPa";
        document.getElementById("pressure2_gr").innerHTML = pressure2_gr + " hPa";
        document.getElementById("pressure3_gr").innerHTML = pressure3_gr + " hPa";
        document.getElementById("pressure4_gr").innerHTML = pressure4_gr + " hPa";

        document.getElementById("pressure_mo").innerHTML = pressure_mo + " hPa";
        document.getElementById("pressure2_mo").innerHTML = pressure2_mo + " hPa";
        document.getElementById("pressure3_mo").innerHTML = pressure3_mo + " hPa";
        document.getElementById("pressure4_mo").innerHTML = pressure4_mo + " hPa";

        document.getElementById("humidity").innerHTML = humidity + " %";
        document.getElementById("humidity2").innerHTML = humidity2 + " %";
        document.getElementById("humidity3").innerHTML = humidity3 + " %";
        document.getElementById("humidity4").innerHTML = humidity4 + " %";

        document.getElementById("pop").innerHTML = Math.round(pop * 100) + " %";
        document.getElementById("pop2").innerHTML = Math.round(pop2 * 100) + " %";
        document.getElementById("pop3").innerHTML = Math.round(pop3 * 100) + " %";
        document.getElementById("pop4").innerHTML = Math.round(pop4 * 100) + " %";

        document.getElementById("windSpeed").innerHTML = wS + " m/s " + opisWiatru(wS);
        document.getElementById("windSpeed2").innerHTML = wS2 + " m/s " + opisWiatru(wS2);
        document.getElementById("windSpeed3").innerHTML = wS3 + " m/s " + opisWiatru(wS3);
        document.getElementById("windSpeed4").innerHTML = wS4 + " m/s " + opisWiatru(wS4);

        document.getElementById("windDir").innerHTML = (wS === 0) ? "-" : kieWiatru(wD);
        document.getElementById("windDir2").innerHTML = (wS2 === 0) ? "-" : kieWiatru(wD2);
        document.getElementById("windDir3").innerHTML = (wS3 === 0) ? "-" : kieWiatru(wD3);
        document.getElementById("windDir4").innerHTML = (wS4 === 0) ? "-" : kieWiatru(wD4);

        document.getElementById("cloudsPerc").innerHTML = cloudsPercentage + " %";
        document.getElementById("cloudsPerc2").innerHTML = cloudsPercentage2 + " %";
        document.getElementById("cloudsPerc3").innerHTML = cloudsPercentage3 + " %";
        document.getElementById("cloudsPerc4").innerHTML = cloudsPercentage4 + " %";

        document.getElementById("pogodaOpis").innerHTML = weatherDescription.slice(0,1).toUpperCase() + weatherDescription.slice(1).toLowerCase();
        document.getElementById("pogodaOpis2").innerHTML = weatherDescription2.slice(0,1).toUpperCase() + weatherDescription2.slice(1).toLowerCase();
        document.getElementById("pogodaOpis3").innerHTML = weatherDescription3.slice(0,1).toUpperCase() + weatherDescription3.slice(1).toLowerCase();
        document.getElementById("pogodaOpis4").innerHTML = weatherDescription4.slice(0,1).toUpperCase() + weatherDescription4.slice(1).toLowerCase();

        let imgUrl = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
        let imgUrl2 = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png"
        let imgUrl3 = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png"
        let imgUrl4 = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"

        document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);
        document.getElementById("currentWeatherImg2").setAttribute("src", imgUrl2);
        document.getElementById("currentWeatherImg3").setAttribute("src", imgUrl3);
        document.getElementById("currentWeatherImg4").setAttribute("src", imgUrl4);

        const locationLink = document.getElementById("locationLink");
        locationLink.innerHTML = city + "  (" + country + ")";
        locationLink.href = `https://openstreetmap.org/#map=16/${lat}/${long}`;

    }
}