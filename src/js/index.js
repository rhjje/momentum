import quotes from './modules/quotes';
import weather from './modules/weather';
import setData from './modules/setData';
import app from './modules/app';

document.addEventListener('DOMContentLoaded', () => {
  setData();
  quotes();
  weather();
  app();
});

document.body.style.height = `${window.innerHeight}px`;

window.addEventListener('resize', () => {
  document.body.style.height = `${window.innerHeight}px`;
});
