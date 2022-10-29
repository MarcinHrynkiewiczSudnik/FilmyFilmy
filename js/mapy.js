
   function GetMap() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
            
                var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'AjJQQP225aTmy-FAAsXsKLL4QN6891w4zL4RRtAVYSS43ePcOSmHH5qrHFrzCGAO',
            center: new Microsoft.Maps.Location(lat, long),
            zoom: 15
            });
        
            var center = map.getCenter();

    //Create custom Pushpin
            var pin = new Microsoft.Maps.Pushpin(center, {
            title: 'Jesteś tutaj',
            // subTitle: 'City Center',
            // text: '+'
        });

    //Add the pushpin to the map
    map.entities.push(pin);
    });
} 
