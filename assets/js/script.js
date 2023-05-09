
        // API key for OpenWeatherMap
const API_KEY = "5d50b70e7bb086d6aa019fa811d9bdd6";

// Retrieve elements from the DOM
const searchForm = document.getElementById("searchForm");
const searchCity = document.getElementById("searchCity");
const searchState = document.getElementById("searchState");
const searchZip = document.getElementById("searchZip");
const cityName = document.getElementById("cityName");
const recentSearches = document.getElementById("recentSearches");
const forecastContainer = document.getElementById("forecastContainer");

// Set up event listener for form submission
searchForm.addEventListener("submit", function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Retrieve search query values
  const city = searchCity.value.trim();
  const state = searchState.value.trim().toUpperCase();
  const zip = searchZip.value.trim();

  // Construct the API URL
  let apiUrl;
  if (city) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&appid=${API_KEY}`;
  } else if (zip) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&units=imperial&appid=${API_KEY}`;
  } else {
    // If no search query is entered, do nothing
    return;
  }

  // Call the OpenWeatherMap API with the constructed URL
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // If the API call fails, throw an error
        throw new Error(response.statusText);
      }
    })
    .then(data => {
      // Update the city name
      cityName.textContent = `${data.name}, ${data.sys.country}`;

      // Add this search to the search history
      const searchHistoryItem = document.createElement("button");
      searchHistoryItem.textContent = `${data.name}, ${data.sys.country}`;
      searchHistoryItem.classList.add("btn", "btn-secondary", "mb-2");
      searchHistoryItem.addEventListener("click", function() {
        // When a search history item is clicked, perform the search again
        searchCity.value = data.name;
        searchState.value = data.sys.country;
        searchZip.value = "";
        searchForm.dispatchEvent(new Event("submit"));
      });
      recentSearches.prepend(searchHistoryItem);

      // Construct URL for 5-day forecast API call
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

      // Call the 5-day forecast API with the constructed URL
      fetch(forecastApiUrl)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            // If the API call fails, throw an error
            throw new Error(response.statusText);
          }
        })
        .then(data => {
          // Clear the previous forecast data
          forecastContainer.innerHTML = "";

          // Loop through each day of the 5-day forecast
          for (let i = 0; i < 5; i++) {
            const forecastData = data.daily[i];
          }
            // Create a card for each day of the 5-day forecast
            const forecastCard = document.createElement("div");
            forecastCard.classList.add("card")
            }
          )
