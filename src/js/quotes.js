const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.refresh-quote');

let numbersOfQuotes;
let check;

const randomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  if (result !== check) {
    check = result;
    return result;
  }
  return randomNumber(0, numbersOfQuotes);
};

const setQuote = () => {
  fetch('./assets/json/quotes.json')
    .then((result) => result.json())
    .then((result) => {
      numbersOfQuotes = result.length;
      const randomQuote = randomNumber(0, numbersOfQuotes);
      quoteText.textContent = result[randomQuote].quote;
      author.textContent = result[randomQuote].author;
    });
};

setQuote();

button.addEventListener('click', setQuote);
