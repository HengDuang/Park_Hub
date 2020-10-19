function busStops(){
    
    fetch('busStops.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.value[0].Description);
                //document.getElementById("BusStop").innerHTML = "Bus Stop: " + data.value[i];

            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}