// plugin of dayjs for date format
dayjs.extend(window.dayjs_plugin_localizedFormat);

const apiKey = '';

// fetching weather data from api
function getWeatherCurrent(City) {
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`; 
    fetch(API_URL) 
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error (${response.statusText}). Invalid city. Please enter a valid city and try again.`);
      }
    })
    .then(function (forecastData){
        showWeatherCurrent(forecastData);
        searchSave(forecastDataData);
    })
    .catch(function (error) {
      alert('Unable to fetch current weather data: ' + error.message);
    });
}