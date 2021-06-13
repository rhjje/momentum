const setWeather = () => {
  const city = document.querySelector('.city');
  const temperature = document.querySelector('.temperature');
  const temperatureInfo = document.querySelector('.temperature-info');
  const description = document.querySelector('.weather-description');
  const weatherIcon = document.querySelector('.weather-icon');
  const humidity = document.querySelector('.humidity-info');
  const wind = document.querySelector('.wind-info');

  const hideElements = (boolean) => {
    temperature.hidden = boolean;
    temperatureInfo.hidden = boolean;
    humidity.parentNode.hidden = boolean;
    wind.parentNode.hidden = boolean;
    weatherIcon.hidden = boolean;
  };

  if (localStorage.getItem('city')) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&lang=en&appid=85d06021f576a4e46bc2f5084d6a6e87&units=metric`)
      .then((data) => data.json())
      .then((data) => {
        hideElements(false);
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description[0].toUpperCase()
        + data.weather[0].description.slice(1);
        humidity.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;
        const cityName = localStorage.getItem('city');
        city.textContent = cityName[0].toUpperCase() + cityName.slice(1);
      }).catch(() => {
        description.textContent = 'City not found';
        city.textContent = 'Please try again';
        hideElements(true);
      });
  } else {
    city.textContent = '[Enter City]';
    description.textContent = 'Weather';
    humidity.parentNode.hidden = true;
    wind.parentNode.hidden = true;
  }
};

export default setWeather;
