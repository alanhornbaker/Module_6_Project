//Part 1 - fetchWeather Function:

var key = "9ee3739a5b753008cdca414a55720f0d";
var city = "Kansas City";

var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=40&appid=${key}`;

fetch(forecastUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    var lat = data.city.coord.lat;
    var lon = data.city.coord.lon;

    var dayDate = data.list[2].dt_txt;
    var icon = data.list[2].weather.icon;
    var tempHigh = data.list[2].main.temp_max;
    var tempLow = data.list[2].main.temp_min;
    var windSpeed = data.list[2].wind.speed;
    var humidity = data.list[2].main.humidity;
    //Need to connect these variables into their appropriate places in the "cityResults" section and the "card-day" elements in the "forecast" section.

    //The id values of those sections (2, 10, 18, 26, & 34) matches with which list needs to be indexed into for that day within the array returned in the JSON object rendered from the API call/fetch.

    //I want to run some kind of looping function, passing the "id" value into the variable definition, so that variable can have a different value depending on the id value in the html.

    //Not sure how to write all of that into functional code.
  });

//Part 2. Add click event to "Search" button in customSearch, also city Preset buttons

var searchButton = document.getElementById("search-form");

var formInput = document.getElementById("form-input");

function formSubmit(event) {
  event.preventDefault();
  console.log(formInput.value);
  var formInput = formInput.value;
}
//2. Once "Click" is heard, pull City Name input from user in input div.
//

searchButton.addEventListener("submit", formSubmit);

//Part 3 - City Preset Buttons:
// lat & Lon for City Presets:

var atlanta = "Atlanta";
var denver = "Denver";
var seattle = "seattle";
var sanFrancisco = "San Francisco";
var orlando = "Orlando";
var newYork = "New York";
var chicago = "Chicago";
var Austin = "Austin";

//3.1 Need to add click event to these buttons.

//3.2 When click is heard, append the value of the "city" variable to be the value of the clicked buttons variable;

//3.3 Once values have been changed, run through code in Part 1: concatenate new API call with new value for the city variable, fetch data, and return new data values for the weather variables.
