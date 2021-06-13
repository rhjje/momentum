const app = () => {
  const greeting = document.querySelector('.greeting');
  const slideLeft = document.querySelector('.slide-left');
  const slideRight = document.querySelector('.slide-right');
  const time = document.querySelector('.time');
  const date = document.querySelector('.date');

  const arrImages = [...Array(20).keys()]
    .map((item) => (item + 1 < 10 ? `0${item + 1}` : `${item + 1}`))
    .sort(() => Math.random() - 0.5);

  const urlsImages = [];
  for (let i = 0; i < 24; i += 1) {
    if (i < 6) {
      urlsImages.push(`url("assets/images/night/${arrImages[i % 6]}.jpg")`);
    } else if (i < 12) {
      urlsImages.push(`url("assets/images/morning/${arrImages[i % 6]}.jpg")`);
    } else if (i < 18) {
      urlsImages.push(`url("assets/images/day/${arrImages[i % 6]}.jpg")`);
    } else {
      urlsImages.push(`url("assets/images/evening/${arrImages[i % 6]}.jpg")`);
    }
  }

  const setBackground = () => {
    const now = new Date();
    const hour = now.getHours();

    const img = document.createElement('img');
    img.src = `${urlsImages[hour].slice(5, -2)}`;

    img.addEventListener('load', () => {
      document.body.style.backgroundImage = urlsImages[hour];
    });

    if (hour < 6) {
      greeting.textContent = 'Good Night, ';
    } else if (hour < 12) {
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      greeting.textContent = 'Good Afternoon, ';
    } else {
      greeting.textContent = 'Good Evening, ';
    }
  };

  setBackground();

  let countSliders = 0;

  const slideSwitch = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour + countSliders < 0) {
      countSliders = 23 - hour;
    }
    if (hour + countSliders > 23) {
      countSliders = -hour;
    }

    const img = document.createElement('img');
    img.src = `${urlsImages[hour + countSliders].slice(5, -2)}`;

    img.addEventListener('load', () => {
      document.body.style.backgroundImage = urlsImages[hour + countSliders];
    });

    slideLeft.disabled = true;
    slideRight.disabled = true;
    setTimeout(() => {
      slideLeft.disabled = false;
      slideRight.disabled = false;
    }, 1000);
  };

  slideLeft.addEventListener('click', () => {
    countSliders -= 1;
    slideSwitch();
  });

  slideRight.addEventListener('click', () => {
    countSliders += 1;
    slideSwitch();
  });

  const showTime = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    if (min === 0 && sec === 0) {
      setBackground();
    }

    time.innerText = `${hour}:${+min < 10 ? '0' : ''}${min}:${+sec < 10 ? '0' : ''}${sec}`;
    date.innerText = `${days[dayOfWeek]}, ${day} ${months[month]}`;

    setTimeout(showTime, 1000);
  };

  showTime();
};

export default app;
