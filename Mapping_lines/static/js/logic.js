// Add console.log to check to see if our code is working.
console.log("working");

// option 1 Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.1975, -97.6664], 5);

// option 2 Create the map object with a center and zoom level.
//let map = L.map("mapid", {
    //center: [
    //  40.7, -94.5
    //],
    //zoom: 4
  //});

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [38.8017, -104.7026],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  opacity: .5,
  weight: 4,
  dashArray: '10, 10', 
  dashOffset: '0'
}).addTo(map);

// Get data from cities.js
let cityData = cities;


// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     color: 'orange',
//     lineweight: 4,
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
// });
 //or for (let i = 0; i < cities.length; i++)
 // console.log(cities[i])

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
