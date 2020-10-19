function regionalPSIReading(){
    
    fetch('https://api.data.gov.sg/v1/environment/pm25')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var northPSI = data.items[0].readings.pm25_one_hourly.north;
                var eastPSI = data.items[0].readings.pm25_one_hourly.east;
                var westPSI = data.items[0].readings.pm25_one_hourly.west;
                var southPSI = data.items[0].readings.pm25_one_hourly.south;
                var centralPSI = data.items[0].readings.pm25_one_hourly.central;
                var minPSI = Math.min(northPSI,eastPSI,westPSI,southPSI,centralPSI);
                var maxPSI = Math.max(northPSI,eastPSI,westPSI,southPSI,centralPSI);
                //var overallPSI = (northPSI+eastPSI+westPSI+southPSI+centralPSI)/5;

                document.getElementById("TimeStamp2").innerHTML = "Timestamp2: " + data.items[0].timestamp;
                document.getElementById("NorthPSI").innerHTML = "North PSI: " + northPSI;
                document.getElementById("EastPSI").innerHTML = "East PSI: " + eastPSI;
                document.getElementById("WestPSI").innerHTML = "West PSI: " + westPSI;
                document.getElementById("SouthPSI").innerHTML = "South PSI: " + southPSI;
                document.getElementById("CentralPSI").innerHTML = "Central PSI: " + centralPSI;
                document.getElementById("OverallPSI").innerHTML = "OverallPSI: " + minPSI + "-" + maxPSI;


            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}