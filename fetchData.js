async function fetchDataFromApi(){
    const response = await fetch('https://api.data.gov.sg/v1/environment/air-temperature');
    const data = await response.json();
    var d = new Date();
    document.getElementById("CurrentTiming").innerHTML = d.toLocaleTimeString();
    return data;
}

fetchDataFromApi().then(data => {
    console.log(data);

    document.getElementById("TimeStamp").innerHTML = "Timestamp: " + data.items[0].timestamp;

    var northSideCount = 0, westSideCount = 0, eastSideCount = 0, southSideCount = 0, centralSideCount = 0;
    var northSide = 0, westSide = 0, eastSide = 0, southSide = 0, centralSide = 0;
    for (var i = 0; i < data.metadata.stations.length; i++) {
        if(data.metadata.stations[i].id == "S100" || data.metadata.stations[i].id == "S104" ){
            northSideCount++;
            northSide += data.items[0].readings[i].value;
        }
        else if (data.metadata.stations[i].id == "S44" || data.metadata.stations[i].id == "S50" || data.metadata.stations[i].id == "S115" || data.metadata.stations[i].id == "S116" || data.metadata.stations[i].id == "S117" || data.metadata.stations[i].id == "S121" ){
            westSideCount++;
            westSide += data.items[0].readings[i].value;
        }
        else if(data.metadata.stations[i].id == "S24" || data.metadata.stations[i].id == "S106" || data.metadata.stations[i].id == "S107"){
            eastSideCount++;
            eastSide += data.items[0].readings[i].value;
        }
        else if(data.metadata.stations[i].id == "S60" || data.metadata.stations[i].id == "S108"){
            southSideCount++;
            southSide += data.items[0].readings[i].value;
        }
        else if(data.metadata.stations[i].id == "S43" || data.metadata.stations[i].id == "S109" || data.metadata.stations[i].id == "S111"){
            centralSideCount++;
            centralSide += data.items[0].readings[i].value;
        }
    }  

    document.getElementById("NorthData").innerHTML = "North Sector: " + (northSide/northSideCount) + " °C";
    document.getElementById("EastData").innerHTML = "East Sector: " + (eastSide/eastSideCount) + " °C";
    document.getElementById("WestData").innerHTML = "West Sector: " + (westSide/westSideCount) + " °C";
    document.getElementById("SouthData").innerHTML = "South Sector: " + (southSide/southSideCount) + " °C";
    document.getElementById("CentralData").innerHTML = "Central Sector: " + (centralSide/centralSideCount) + " °C";



        // var div2 = document.createElement("div2");
        // var div3= document.createElement("div3");

        // div2.innerHTML = "<p>Location: " + data.metadata.stations[i].name;
        // div3.innerHTML =" <p>Temperature: " + data.items[0].readings[i].value;

        // mainContainer.appendChild(div2);
        // mainContainer.appendChild(div3);
        // // var stations = data.metadata.stations[i];
        // // var reading = data.items[0].readings[i];
        // // console.log(stations.name);
        // // console.log(reading.value);
    
    
})        