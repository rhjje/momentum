const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.refresh-quote');

let arrImages = ['01', '02', '03', '04', '05',
    '06', '07', '08', '09', '10', '11', '12', '13',
    '14', '15', '16', '17', '18', '19', 
    '20'].sort(() => Math.random() - 0.5);

function showTime() {
    const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDate();
    let dayOfWeek = today.getDay();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    time.innerText = `${hour}:${addZero(min)}:${addZero(sec)}`;
    date.innerText = `${dayNames[dayOfWeek]}, ${day} ${monthNames[month]}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (+n < 10 ? '0' : '') + n;
}

function setBackground() {
    let today = new Date();
    let hour = today.getHours();
    let numberOfImage = arrImages[hour % 6];

    if (hour < 6) {
        document.body.style.backgroundImage = `url("assets/images/night/${numberOfImage}.jpg`;
        document.body.style.color = 'white';
        greeting.textContent = 'Good Night, ';
    } else if (hour < 12) {
        document.body.style.backgroundImage = `url("assets/images/morning/${numberOfImage}.jpg`;
        document.body.style.color = 'black';
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        document.body.style.backgroundImage = `url("assets/images/day/${numberOfImage}.jpg`;
        document.body.style.color = 'black';
        greeting.textContent = 'Good Afternoon, ';
    } else {
        document.body.style.backgroundImage = `url("assets/images/evening/${numberOfImage}.jpg`;
        document.body.style.color = 'white';
        greeting.textContent = 'Good Evening, ';
    }

    setTimeout(setBackground, 1000);
}

function getData() {
    if (localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }

    if (localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('click', function(event) {
    if (name.textContent === '[Enter Name]') {
        name.textContent = null;
    }
});

name.addEventListener('blur', function(event) {
    if (name.textContent === '') {
        name.textContent = '[Enter Name]';
    }
});

name.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        localStorage.setItem('name', event.target.innerText);
        name.blur();
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
});

focus.addEventListener('click', function(event) {
    if (focus.textContent === '[Enter Name]') {
        focus.textContent = null;
    }
});

focus.addEventListener('blur', function(event) {
    if (focus.textContent === '') {
        focus.textContent = '[Enter Name]';
    }
});

focus.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        localStorage.setItem('focus', event.target.innerText);
        focus.blur();
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
});

async function getJSON() {
    const response = await fetch("quotes.json");
    const data = await response.json();
    let randomQuote = randomNumber(0, data.length); 
    quoteText.textContent = data[randomQuote].quote;
    author.textContent = data[randomQuote].author;
}

let randomNumbers = 0;

function randomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    if (result === randomNumbers) {
        result = Math.floor(Math.random() * (max - min)) + min;
        randomNumbers = result; 
        return result;
    } else {
        randomNumbers = result; 
        return result;
    }
}

button.addEventListener('click', function() {
    getJSON();  
});

showTime();
setBackground();
getData();
getJSON();




// let a = getJSON();

// console.log(a);
// let quotes = fetch ("quotes.json")
//  .then((response) => response.json())
//  .then((response) => console.log(response[0].name));



// // DOM Elements
// const time = document.querySelector('.time'),
//   greeting = document.querySelector('.greeting'),
//   name = document.querySelector('.name'),
//   focus = document.querySelector('.focus');

// // Options
// const showAmPm = true;

// // Show Time
// function showTime() {
//   let today = new Date(),
//     hour = today.getHours(),
//     min = today.getMinutes(),
//     sec = today.getSeconds();

//   // Set AM or PM
//   const amPm = hour >= 12 ? 'PM' : 'AM';

//   // 12hr Format
//   hour = hour % 12 || 12;

//   // Output Time
//   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
//     sec
//   )} ${showAmPm ? amPm : ''}`;

//   setTimeout(showTime, 1000);
// }

// // Add Zeros
// function addZero(n) {
//   return (parseInt(n, 10) < 10 ? '0' : '') + n;
// }

// // Set Background and Greeting
// function setBgGreet() {
//   let today = new Date(),
//     hour = today.getHours();

//   if (hour < 12) {
//     // Morning
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
//     greeting.textContent = 'Good Morning, ';
//   } else if (hour < 18) {
//     // Afternoon
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
//     greeting.textContent = 'Good Afternoon, ';
//   } else {
//     // Evening
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/924T2Wv/night.jpg')";
//     greeting.textContent = 'Good Evening, ';
//     document.body.style.color = 'white';
//   }
// }

// // Get Name
// function getName() {
//   if (localStorage.getItem('name') === null) {
//     name.textContent = '[Enter Name]';
//   } else {
//     name.textContent = localStorage.getItem('name');
//   }
// }

// // Set Name
// function setName(e) {
//   if (e.type === 'keypress') {
//     // Make sure enter is pressed
//     if (e.which == 13 || e.keyCode == 13) {
//       localStorage.setItem('name', e.target.innerText);
//       name.blur();
//     }
//   } else {
//     localStorage.setItem('name', e.target.innerText);
//   }
// }

// // Get Focus
// function getFocus() {
//   if (localStorage.getItem('focus') === null) {
//     focus.textContent = '[Enter Focus]';
//   } else {
//     focus.textContent = localStorage.getItem('focus');
//   }
// }

// // Set Focus
// function setFocus(e) {
//   if (e.type === 'keypress') {
//     // Make sure enter is pressed
//     if (e.which == 13 || e.keyCode == 13) {
//       localStorage.setItem('focus', e.target.innerText);
//       focus.blur();
//     }
//   } else {
//     localStorage.setItem('focus', e.target.innerText);
//   }
// }

// name.addEventListener('keypress', setName);
// name.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
// focus.addEventListener('blur', setFocus);

// // Run
// showTime();
// setBgGreet();
// getName();
// getFocus();