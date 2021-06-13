const quotes = () => {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const button = document.querySelector('.refresh-quote');

  let numberOfQuotes;
  let check;

  const getRandomQuote = (min, max) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    if (result !== check) {
      check = result;
      return result;
    }
    return getRandomQuote(0, numberOfQuotes);
  };

  const setQuote = () => {
    fetch('./assets/json/quotes.json')
      .then((data) => data.json())
      .then((data) => {
        numberOfQuotes = data.length;
        const randomQuote = getRandomQuote(0, numberOfQuotes);
        quote.textContent = data[randomQuote].quote;
        author.textContent = data[randomQuote].author;
      }).catch(() => {
        quote.textContent = 'An Error Occurred, Please Try Again Later (:';
      });
  };

  setQuote();

  button.addEventListener('click', setQuote);
};

export default quotes;
