import app from './background';

const time = document.querySelector('.time');
const date = document.querySelector('.date');

const showTime = () => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const dayOfWeek = today.getDay();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  if (min === 0 && sec === 0) {
    app.setBackground();
  }

  time.innerText = `${hour}:${+min < 10 ? '0' : ''}${min}:${+sec < 10 ? '0' : ''}${sec}`;
  date.innerText = `${dayNames[dayOfWeek]}, ${day} ${monthNames[month]}`;

  setTimeout(showTime, 1000);
};

showTime();
