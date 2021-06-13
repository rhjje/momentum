import setWeather from './weather';

const setData = () => {
  const name = document.querySelector('.name');
  const focus = document.querySelector('.focus');
  const city = document.querySelector('.city');

  name.textContent = localStorage.getItem('name') ? localStorage.getItem('name') : '[Enter Name]';
  focus.textContent = localStorage.getItem('focus') ? localStorage.getItem('focus') : '[Enter Focus]';

  name.addEventListener('click', () => {
    name.textContent = '';
  });

  name.addEventListener('blur', (event) => {
    if (event.target.innerText) {
      localStorage.setItem('name', event.target.innerText);
      name.textContent = event.target.innerText;
    } else {
      name.textContent = localStorage.getItem('name') ? localStorage.getItem('name') : '[Enter Name]';
    }
  });

  name.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      localStorage.setItem('name', event.target.innerText);
      name.blur();
    }
  });

  focus.addEventListener('click', () => {
    focus.textContent = '';
  });

  focus.addEventListener('blur', (event) => {
    if (event.target.innerText) {
      localStorage.setItem('focus', event.target.innerText);
      focus.textContent = event.target.innerText;
    } else {
      focus.textContent = localStorage.getItem('focus') ? localStorage.getItem('focus') : '[Enter City]';
    }
  });

  focus.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      localStorage.setItem('focus', event.target.innerText);
      focus.blur();
    }
  });

  city.addEventListener('click', () => {
    city.textContent = '';
  });

  city.addEventListener('blur', (event) => {
    if (event.target.innerText) {
      localStorage.setItem('city', event.target.innerText);
    }
    setWeather();
  });

  city.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      localStorage.setItem('city', event.target.innerText);
      city.blur();
    }
  });
};

export default setData;
