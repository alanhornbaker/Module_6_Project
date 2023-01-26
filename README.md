# Module 6 Project: Weather Dashboard

## Motiovation for Project

I want to be able to grab a lot of weather data and display the most useful information in a web application.

## User Story & Acceptance Criteria

User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Mock Up

![Mock-Up Image](./Module_6_Project/assets/images/06-server-side-apis-homework-demo.png)
![Mock-Up Image](./Module_6_Project/assets/images/06-dashboardMockup.png)

## Road Blocks and Future Development

The functional part of my code is the API call and fetch request. I am able to query the openweather API and get a JSON object with adequate data to meet the needs of the local application. I am able to index into that array to pull the relevant data, and set the value to a variable that I can use.

Roadblock #1 is figuring out how to take those variables (script.js 18-23) and place them where I want them in the html/DOM.  
Roadblock #2 is not knowing enough syntax to write the function described in the notes (script.js 24-30).
