// Function to fetch current weather data and forecast data, and update the UI
async function getWeatherAndForecast() {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.889&lon=-111.880&units=imperial&appid=2ae4ce20f9fe9e0481bc660cb2a5bfdf";
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.889&lon=-111.880&units=imperial&appid=2ae4ce20f9fe9e0481bc660cb2a5bfdf";

    try {
        // Fetch current weather data
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Update UI with current weather data
        updateWeatherUI(weatherData);

        // Update UI with weather forecast data
        updateForecastUI(forecastData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to update the UI with current weather data
function updateWeatherUI(weatherData) {
    const currentWeather = document.getElementById("current-weather");
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    currentWeather.innerHTML = `
        <h2>Weather in Ankara</h2>
        <p>Description: ${weatherData.weather[0].description}</p>
        <img src="${iconUrl}" alt="${weatherData.weather[0].description}" />
        <p>Temperature: ${weatherData.main.temp} °F</p>
        <p>Feels Like: ${weatherData.main.feels_like} °F</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
}

// Function to update the UI with weather forecast data
function updateForecastUI(forecastData) {
    const forecastSect = document.getElementById("forecastsect");
    forecastSect.innerHTML = ""; // Clear existing forecast content

    // Extract the forecast for the next three days
    const forecasts = forecastData.list.slice(0, 3); // Get the next 3 forecasts
    forecasts.forEach((forecast, index) => {
        const forecastElement = document.createElement("section");
        forecastElement.classList.add("forecast");
        forecastElement.id = `day-${index + 1}`;
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        forecastElement.innerHTML = `
            <h3>${formatDate(forecast.dt)}</h3>
            <p>Description: ${forecast.weather[0].description}</p>
            <img src="${iconUrl}" alt="${forecast.weather[0].description}" />
            <p>Temperature: ${forecast.main.temp} °F</p>
            <p>Feels Like: ${forecast.main.feels_like} °F</p>
            <p>Humidity: ${forecast.main.humidity}%</p>
        `;
        forecastSect.appendChild(forecastElement);
    });
}

// Function to format date from UNIX timestamp
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

// Call the function to fetch current weather data and forecast data when the page loads
getWeatherAndForecast();
