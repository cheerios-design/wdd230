const card = document.querySelector("#weathercard");
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#figcap');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.889&lon=-111.880&units=imperial&appid=2ae4ce20f9fe9e0481bc660cb2a5bfdf";
//  40.889240.74131376412349, 31.595726752422554
async function getWeather() {
    try {
  
        const response = await fetch(url);
    
  
        if (response.ok) {
  
          const data = await response.json();
          console.log(data);
          displayWeather(data);
          
        } else {
  
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (error) {
  
        console.error('An error occurred:', error.message);
      }  
}
getWeather();



function displayWeather(data) {
    const temp = (data.main.temp)
    currentTemp.textContent = `Bolu Current Temperature: \n${temp}`+ '\u00B0F';
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    weatherIcon.setAttribute("width", "50")
    weatherIcon.setAttribute("height", "auto");
    captionDesc.textContent = `Conditions: ${data.weather[0].description}`;
}