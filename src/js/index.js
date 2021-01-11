import './quotes';
import './time';
import './background';
import './setData';

document.body.style.height = `${window.innerHeight}px`;

window.addEventListener('resize', () => {
  document.body.style.height = `${window.innerHeight}px`;
});
