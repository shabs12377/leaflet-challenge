let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson"
var map = L.map('map').setView([37, -122], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

d3.json(url).then(function (data) {
    L.geoJSON(data, {
        pointToLayer:function(geoJsonPoint, latlng) {
           console.log(geoJsonPoint)
           console.log(geoJsonPoint.properties.mag);
           console.log(geoJsonPoint.properties.title);
           console.log(geoJsonPoint.geometry.coordinates);
            return L.circleMarker(latlng,{
                color: geoJsonPoint.properties.mag>2?"red":"blue"
            }); 
        },
       
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(map);


})

