const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity-info');
const wind = document.querySelector('.wind-info');

const getWeather = () => {
  if (city.textContent !== '' && city.textContent !== '[Enter City]') {
    weatherIcon.className = 'weather-icon owf';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=85d06021f576a4e46bc2f5084d6a6e87&units=metric`)
      .then((result) => result.json())
      .then((result) => {
        if (result.message === 'city not found') {
          city.textContent = 'City not found';
          weather.textContent = 'Weather';
          document.querySelector('.temperature').hidden = true;
          document.querySelector('.humidity').hidden = true;
          document.querySelector('.wind').hidden = true;
        } else {
          document.querySelector('.temperature').hidden = false;
          weatherIcon.classList.add(`owf-${result.weather[0].id}`);
          temperature.textContent = `${Math.round(result.main.temp)}°C`;
          weatherDescription.textContent = result.weather[0].description[0].toUpperCase()
          + result.weather[0].description.slice(1);
          humidity.textContent = result.main.humidity;
          wind.textContent = result.wind.speed;
        }
      });
  }
};

export default getWeather;

document.addEventListener('DOMContentLoaded', getWeather);
