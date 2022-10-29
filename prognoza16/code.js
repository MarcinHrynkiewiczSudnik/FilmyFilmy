let lat;
let long;
let miasto;
let kraj;
let url;
let accu = 2;
const apiKey = "0576597ea274437983ce01ea54115e7f";

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

    //
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
        miasto= "";
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
        miasto= "";
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
    //
    let but7 = document.getElementById("waw");
    but7.onclick = function () {
        lat = 52.23187143729752;
        long = 21.00588067054377;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    // let but8 = document.getElementById("nyc");
    // but8.onclick = function () {
    //     lat = 40.78292751220498;
    //     long = -73.95896824973347;
    //     city = "New York,US";
    //     accu = 0;
    //     getWeatherData();
    // }
    //
    let but9 = document.getElementById("ali");
    but9.onclick = function () {
        lat = 38.34573665884138;
        long = -0.4861717022075692;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    let but10 = document.getElementById("kopen");
    but10.onclick = function () {
        lat = 55.68516509576939;
        long = 12.575603544499206;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    let but11 = document.getElementById("rom");
    but11.onclick = function () {
        lat = 41.88980721900133;
        long = 12.492436802104073;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    // let but12 = document.getElementById("krak");
    // but12.onclick = function () {
    //     lat = 50.05500802275578;
    //     long = 19.934619577954262;
    //     city = "Krakow,PL";
    //     accu = 0;
    //     getWeatherData();
    // }
    //
    let but13 = document.getElementById("par");
    but13.onclick = function () {
        lat = 48.858257139266;
        long = 2.2941165178354885;
        miasto = "Paris";
        kraj = "FR";
        accu = 0;
        getWeatherData();
    }
    //
    let but14 = document.getElementById("kai");
    but14.onclick = function () {
        lat = 29.979868567019878;
        long = 31.126833923138427;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    let but15 = document.getElementById("kor");
    but15.onclick = function () {
        lat = 39.62578878951895;
        long = 19.921130821027507;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    // let but16 = document.getElementById("tok");
    // but16.onclick = function () {
    //     lat = 35.7101622086782;
    //     long = 139.81047002807682;
    //     city = "Tokyo,JP";
    //     accu = 0;
    //     getWeatherData();
    // }
    //
    // let but17 = document.getElementById("gdsm");
    // but17.onclick = function () {
    //     lat = 54.34854279233344;
    //     long = 18.65321544461661;
    //     city = "";
    //     accu = 0;
    //     getWeatherData();
    // }
    //
    let but18 = document.getElementById("sop");
    but18.onclick = function () {
        lat = 54.44583227690732;
        long = 18.57084039039612;
        miasto = "";
        accu = 0;
        getWeatherData();
    }
    //
    // let but19 = document.getElementById("gdy");
    // but19.onclick = function () {
    //     lat = 54.51933192603506;
    //     long = 18.550774019724585;
    //     city = "";
    //     accu = 0;
    //     getWeatherData();
    // }
    //
    let but20 = document.getElementById("karp");
    but20.onclick = function () {
        lat = 50.775371550200504;
        long = 15.756795820390076;
        miasto = "";
        accu = 0;
        getWeatherData();
    }

    function getWeatherData() {

        if (miasto === "") {url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&lang=pl&days=5&key=${apiKey}`}
             else {url = `https://api.weatherbit.io/v2.0/forecast/daily?&city=${miasto}&country=${kraj}&lang=pl&days=5&key=${apiKey}`}

        // url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&lang=pl&days=5&key=${apiKey}`;

        fetch(url).then(function (response) {
            response.json().then(function (data) {
                updateWeatherData(data);
                // console.log(data);
            });
        });
    }


    function updateWeatherData(data) {
        //
        let realTime = czas => (czas > 9) ? czas : ("0" + czas);
        //
        // const sunRise = new Date(data.city.sunrise * 1000);
        // const sunSet = new Date(data.city.sunset * 1000);
        // const tZone = (data.city.timezone)/60/60;
        //
        // document.getElementById("zone").innerHTML = (tZone > 0) ? ("UTC +" + tZone + ":00") : ("UTC " + tZone + ":00");
        // document.getElementById("sunRise").innerHTML = sunRise.getHours() + ":" + realTime(sunRise.getMinutes()) + ":" + realTime(sunRise.getSeconds());
        // document.getElementById("sunSet").innerHTML = sunSet.getHours() + ":" + realTime(sunSet.getMinutes()) + ":" + realTime(sunSet.getSeconds());
        //
        // const godz = new Date(data.list[0].dt * 1000);
        // const godz2 = new Date(data.list[1].dt * 1000);
        // const godz3 = new Date(data.list[2].dt * 1000);
        // const godz4 = new Date(data.list[3].dt * 1000);
        //
        //
        // let localHour = (godz.getHours() + tZone - 2);
        // if (localHour >= 24) localHour -= 24;
        // if (localHour < 0) localHour += 24;
        //
        // let localHour2 = (godz2.getHours() + tZone - 2);
        // if (localHour2 >= 24) localHour2 -= 24;
        // if (localHour2 < 0) localHour2 += 24;
        //
        // let localHour3 = (godz3.getHours() + tZone - 2);
        // if (localHour3 >= 24) localHour3 -= 24;
        // if (localHour3 < 0) localHour3 += 24;
        //
        // let localHour4 = (godz4.getHours() + tZone - 2);
        // if (localHour4 >= 24) localHour4 -= 24;
        // if (localHour4 < 0) localHour4 += 24;
        //

        const day1 = data.data[1].valid_date;
        const day2 = data.data[2].valid_date;
        const day3 = data.data[3].valid_date;
        const day4 = data.data[4].valid_date;

        const sunrise1 = new Date(data.data[1].sunrise_ts * 1000);
        const sunrise2 = new Date(data.data[2].sunrise_ts * 1000);
        const sunrise3 = new Date(data.data[3].sunrise_ts * 1000);
        const sunrise4 = new Date(data.data[4].sunrise_ts * 1000);

        const sunset1 = new Date(data.data[1].sunset_ts * 1000);
        const sunset2 = new Date(data.data[2].sunset_ts * 1000);
        const sunset3 = new Date(data.data[3].sunset_ts * 1000);
        const sunset4 = new Date(data.data[4].sunset_ts * 1000);

        const luna1 = data.data[1].moon_phase_lunation;
        const luna2 = data.data[2].moon_phase_lunation;
        const luna3 = data.data[3].moon_phase_lunation;
        const luna4 = data.data[4].moon_phase_lunation;

        function moonPhase(faza) {
            if (faza >= 0 && faza <= 0.03) return " (Nów)";
            if (faza >= 0.24 && faza <= 0.28) return " (1 kwadra)";
            if (faza >= 0.49 && faza <= 0.53) return " (Pełnia)";
            if (faza >= 0.74 && faza <= 0.78) return " (3 kwadra)";
            else return "";
        }

        document.getElementById("day1").innerHTML = day1;
        document.getElementById("day2").innerHTML = day2;
        document.getElementById("day3").innerHTML = day3;
        document.getElementById("day4").innerHTML = day4;

        document.getElementById("sunrise1").innerHTML = sunrise1.getHours() + ":" + realTime(sunrise1.getMinutes()) + ":" + realTime(sunrise1.getSeconds());
        document.getElementById("sunrise2").innerHTML = sunrise2.getHours() + ":" + realTime(sunrise2.getMinutes()) + ":" + realTime(sunrise2.getSeconds());
        document.getElementById("sunrise3").innerHTML = sunrise3.getHours() + ":" + realTime(sunrise3.getMinutes()) + ":" + realTime(sunrise3.getSeconds());
        document.getElementById("sunrise4").innerHTML = sunrise4.getHours() + ":" + realTime(sunrise4.getMinutes()) + ":" + realTime(sunrise4.getSeconds());

        document.getElementById("sunset1").innerHTML = sunset1.getHours() + ":" + realTime(sunset1.getMinutes()) + ":" + realTime(sunset1.getSeconds());
        document.getElementById("sunset2").innerHTML = sunset2.getHours() + ":" + realTime(sunset2.getMinutes()) + ":" + realTime(sunset2.getSeconds());
        document.getElementById("sunset3").innerHTML = sunset3.getHours() + ":" + realTime(sunset3.getMinutes()) + ":" + realTime(sunset3.getSeconds());
        document.getElementById("sunset4").innerHTML = sunset4.getHours() + ":" + realTime(sunset4.getMinutes()) + ":" + realTime(sunset4.getSeconds());

        document.getElementById("luna1").innerHTML = luna1 + moonPhase(luna1);
        document.getElementById("luna2").innerHTML = luna2 + moonPhase(luna2);
        document.getElementById("luna3").innerHTML = luna3 + moonPhase(luna3);
        document.getElementById("luna4").innerHTML = luna4 + moonPhase(luna4);

        const temp1 = data.data[1].temp;
        const temp2 = data.data[2].temp;
        const temp3 = data.data[3].temp;
        const temp4 = data.data[4].temp;

        const tempMax1 = data.data[1].max_temp;
        const tempMax2 = data.data[2].max_temp;
        const tempMax3 = data.data[3].max_temp;
        const tempMax4 = data.data[4].max_temp;

        const tempMin1 = data.data[1].min_temp;
        const tempMin2 = data.data[2].min_temp;
        const tempMin3 = data.data[3].min_temp;
        const tempMin4 = data.data[4].min_temp;

        const pressure1_gr = data.data[1].pres;
        const pressure2_gr = data.data[2].pres;
        const pressure3_gr = data.data[3].pres;
        const pressure4_gr = data.data[4].pres;

        const humidity1 = data.data[1].rh;
        const humidity2 = data.data[2].rh;
        const humidity3 = data.data[3].rh;
        const humidity4 = data.data[4].rh;

        const wS1 = data.data[1].wind_spd;
        const wS2 = data.data[2].wind_spd;
        const wS3 = data.data[3].wind_spd;
        const wS4 = data.data[4].wind_spd;

        const wD1 = data.data[1].wind_dir;
        const wD2 = data.data[2].wind_dir;
        const wD3 = data.data[3].wind_dir;
        const wD4 = data.data[4].wind_dir;
        //
        const cloudsPercentage1 = data.data[1].clouds;
        const cloudsPercentage2 = data.data[2].clouds;
        const cloudsPercentage3 = data.data[3].clouds;
        const cloudsPercentage4 = data.data[4].clouds;

        const weatherDescription1 = data.data[1].weather.description;
        const weatherDescription2 = data.data[2].weather.description;
        const weatherDescription3 = data.data[3].weather.description;
        const weatherDescription4 = data.data[4].weather.description;

        const pop1 = data.data[1].pop;
        const pop2 = data.data[2].pop;
        const pop3 = data.data[3].pop;
        const pop4 = data.data[4].pop;

        const opad1 = Math.round(data.data[1].precip);
        const opad2 = Math.round(data.data[2].precip);
        const opad3 = Math.round(data.data[3].precip);
        const opad4 = Math.round(data.data[4].precip);

        const uv1 = data.data[1].uv;
        const uv2 = data.data[2].uv;
        const uv3 = data.data[3].uv;
        const uv4 = data.data[4].uv;

        const city = data.city_name;
        const country = data.country_code;


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

        document.getElementById("temp1").innerHTML = temp1 + ' \xB0C';
        document.getElementById("temp2").innerHTML = temp2 + ' \xB0C';
        document.getElementById("temp3").innerHTML = temp3 + ' \xB0C';
        document.getElementById("temp4").innerHTML = temp4 + ' \xB0C';

        document.getElementById("tempMin1").innerHTML = tempMin1 + ' \xB0C';
        document.getElementById("tempMin2").innerHTML = tempMin2 + ' \xB0C';
        document.getElementById("tempMin3").innerHTML = tempMin3 + ' \xB0C';
        document.getElementById("tempMin4").innerHTML = tempMin4 + ' \xB0C';

        document.getElementById("tempMax1").innerHTML = tempMax1 + ' \xB0C';
        document.getElementById("tempMax2").innerHTML = tempMax2 + ' \xB0C';
        document.getElementById("tempMax3").innerHTML = tempMax3 + ' \xB0C';
        document.getElementById("tempMax4").innerHTML = tempMax4 + ' \xB0C';

        document.getElementById("pressure1_gr").innerHTML = pressure1_gr + " hPa";
        document.getElementById("pressure2_gr").innerHTML = pressure2_gr + " hPa";
        document.getElementById("pressure3_gr").innerHTML = pressure3_gr + " hPa";
        document.getElementById("pressure4_gr").innerHTML = pressure4_gr + " hPa";
        //
        // document.getElementById("pressure_mo").innerHTML = pressure_mo + " hPa";
        // document.getElementById("pressure2_mo").innerHTML = pressure2_mo + " hPa";
        // document.getElementById("pressure3_mo").innerHTML = pressure3_mo + " hPa";
        // document.getElementById("pressure4_mo").innerHTML = pressure4_mo + " hPa";
        //
        document.getElementById("humidity1").innerHTML = humidity1 + " %";
        document.getElementById("humidity2").innerHTML = humidity2 + " %";
        document.getElementById("humidity3").innerHTML = humidity3 + " %";
        document.getElementById("humidity4").innerHTML = humidity4 + " %";
        //
        document.getElementById("pop1").innerHTML = pop1 + " %";
        document.getElementById("pop2").innerHTML = pop2 + " %";
        document.getElementById("pop3").innerHTML = pop3 + " %";
        document.getElementById("pop4").innerHTML = pop4 + " %";

        document.getElementById("opad1").innerHTML = opad1 + " mm";
        document.getElementById("opad2").innerHTML = opad2 + " mm";
        document.getElementById("opad3").innerHTML = opad3 + " mm";
        document.getElementById("opad4").innerHTML = opad4 + " mm";

        document.getElementById("uv1").innerHTML = uv1;
        document.getElementById("uv2").innerHTML = uv2;
        document.getElementById("uv3").innerHTML = uv3;
        document.getElementById("uv4").innerHTML = uv4;
        //
        document.getElementById("windSpeed1").innerHTML = wS1 + " m/s " + opisWiatru(wS1);
        document.getElementById("windSpeed2").innerHTML = wS2 + " m/s " + opisWiatru(wS2);
        document.getElementById("windSpeed3").innerHTML = wS3 + " m/s " + opisWiatru(wS3);
        document.getElementById("windSpeed4").innerHTML = wS4 + " m/s " + opisWiatru(wS4);

        document.getElementById("windDir1").innerHTML = (wS1 === 0) ? "-" : kieWiatru(wD1);
        document.getElementById("windDir2").innerHTML = (wS2 === 0) ? "-" : kieWiatru(wD2);
        document.getElementById("windDir3").innerHTML = (wS3 === 0) ? "-" : kieWiatru(wD3);
        document.getElementById("windDir4").innerHTML = (wS4 === 0) ? "-" : kieWiatru(wD4);

        document.getElementById("weaDesc1").innerHTML = weatherDescription1;
        document.getElementById("weaDesc2").innerHTML = weatherDescription2;
        document.getElementById("weaDesc3").innerHTML = weatherDescription3;
        document.getElementById("weaDesc4").innerHTML = weatherDescription4;

        //
        document.getElementById("cloudsPerc1").innerHTML = cloudsPercentage1 + " %";
        document.getElementById("cloudsPerc2").innerHTML = cloudsPercentage2 + " %";
        document.getElementById("cloudsPerc3").innerHTML = cloudsPercentage3 + " %";
        document.getElementById("cloudsPerc4").innerHTML = cloudsPercentage4 + " %";
        //

        // https://www.weatherbit.io/static/img/icons/t01d.png
        let imgUrl1 = "https://www.weatherbit.io/static/img/icons/" + data.data[1].weather.icon + ".png"
        let imgUrl2 = "https://www.weatherbit.io/static/img/icons/" + data.data[2].weather.icon + ".png"
        let imgUrl3 = "https://www.weatherbit.io/static/img/icons/" + data.data[3].weather.icon + ".png"
        let imgUrl4 = "https://www.weatherbit.io/static/img/icons/" + data.data[4].weather.icon + ".png"

        document.getElementById("currentWeatherImg1").setAttribute("src", imgUrl1);
        document.getElementById("currentWeatherImg2").setAttribute("src", imgUrl2);
        document.getElementById("currentWeatherImg3").setAttribute("src", imgUrl3);
        document.getElementById("currentWeatherImg4").setAttribute("src", imgUrl4);
        //
        const locationLink = document.getElementById("locationLink");
        locationLink.innerHTML = city + "  (" + country + ")";
        locationLink.href = `https://openstreetmap.org/#map=16/${lat}/${long}`;

    }
}