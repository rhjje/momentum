const background = {
  currentImages: [],
  greeting: null,
  countSliders: 0,
  slideLeft: null,
  slideRight: null,

  init() {
    const arrImages = ['01', '02', '03', '04', '05',
      '06', '07', '08', '09', '10', '11', '12', '13',
      '14', '15', '16', '17', '18', '19', '20',
    ];

    arrImages.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 24; i += 1) {
      if (i < 6) {
        this.currentImages.push(`url("assets/images/night/${arrImages[i % 6]}.jpg")`);
      } else if (i < 12) {
        this.currentImages.push(`url("assets/images/morning/${arrImages[i % 6]}.jpg")`);
      } else if (i < 18) {
        this.currentImages.push(`url("assets/images/day/${arrImages[i % 6]}.jpg")`);
      } else {
        this.currentImages.push(`url("assets/images/evening/${arrImages[i % 6]}.jpg")`);
      }
    }

    this.greeting = document.querySelector('.greeting');
    this.slideLeft = document.querySelector('.slide-left');
    this.slideRight = document.querySelector('.slide-right');

    this.slideLeft.addEventListener('click', () => {
      this.countSliders -= 1;
      this.slideSwitch();
    });

    this.slideRight.addEventListener('click', () => {
      this.countSliders += 1;
      this.slideSwitch();
    });
    this.setBackground();
  },

  setBackground() {
    const today = new Date();
    const hour = today.getHours();

    const img = document.createElement('img');
    img.src = `${this.currentImages[hour].slice(5, -2)}`;

    img.onload = () => {
      document.body.style.backgroundImage = this.currentImages[hour];
    };

    document.body.style.color = 'white';
    if (hour < 6) {
      this.greeting.textContent = 'Good Night, ';
    } else if (hour < 12) {
      this.greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      this.greeting.textContent = 'Good Afternoon, ';
    } else {
      this.greeting.textContent = 'Good Evening, ';
    }
  },

  slideSwitch() {
    const today = new Date();
    const hour = today.getHours();
    if (hour + this.countSliders < 0) {
      this.countSliders = 23 - hour;
    }
    if (hour + this.countSliders > 23) {
      this.countSliders = -hour;
    }

    const img = document.createElement('img');
    img.src = `${this.currentImages[hour + this.countSliders].slice(5, -2)}`;

    img.onload = () => {
      document.body.style.backgroundImage = this.currentImages[hour + this.countSliders];
    };

    this.slideLeft.disabled = true;
    this.slideRight.disabled = true;
    setTimeout(() => {
      this.slideLeft.disabled = false;
      this.slideRight.disabled = false;
    }, 1000);
  },
};

background.init();

export default background;
