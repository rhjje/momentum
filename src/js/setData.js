import getWeather from './weather';

const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather-description');

const getData = () => {
  name.textContent = !localStorage.getItem('name') ? '[Enter Name]' : localStorage.getItem('name');
  focus.textContent = !localStorage.getItem('focus') ? '[Enter Focus]' : focus.textContent = localStorage.getItem('focus');

  if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
    city.textContent = '[Enter City]';
    weather.textContent = 'Weather';
    document.querySelector('.humidity').hidden = true;
    document.querySelector('.wind').hidden = true;
  } else {
    city.textContent = localStorage.getItem('city');
  }
};

name.addEventListener('click', () => {
  name.textContent = null;
});

name.addEventListener('blur', () => {
  name.textContent = !localStorage.getItem('name') ? '[Enter Name]' : localStorage.getItem('name');
});

name.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    localStorage.setItem('name', event.target.innerText);
    name.blur();
  } else {
    localStorage.setItem('name', event.target.innerText);
  }
});

focus.addEventListener('click', () => {
  focus.textContent = null;
});

focus.addEventListener('blur', () => {
  focus.textContent = !localStorage.getItem('focus') ? '[Enter Name]' : localStorage.getItem('focus');
});

focus.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    localStorage.setItem('focus', event.target.innerText);
    focus.blur();
  } else {
    localStorage.setItem('focus', event.target.innerText);
  }
});

city.addEventListener('click', () => {
  city.textContent = null;
});

city.addEventListener('blur', () => {
  if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
    city.textContent = '[Enter City]';
    weather.textContent = 'Weather';
    document.querySelector('.temperature-info').hidden = true;
    document.querySelector('.humidity').hidden = true;
    document.querySelector('.wind').hidden = true;
  } else {
    city.textContent = localStorage.getItem('city');
  }
});

city.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    localStorage.setItem('city', event.target.innerText);
    document.querySelector('.temperature-info').hidden = false;
    document.querySelector('.humidity').hidden = false;
    document.querySelector('.wind').hidden = false;
    city.blur();
    getWeather();
  } else {
    localStorage.setItem('city', event.target.innerText);
  }
});

const setCity = (event) => {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
};

city.addEventListener('keypress', setCity);

getData();
