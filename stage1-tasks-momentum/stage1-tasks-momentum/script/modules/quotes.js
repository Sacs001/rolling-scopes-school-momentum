
import { getRandomInt } from './sliderBg.js'


async function getQuotes(lang) {

    let quote = document.querySelector('.quote');
    let author = document.querySelector('.author');
    let dateQuotes = '';

    const quotes = './script/dataQuotes.json';
    const res = await fetch(quotes);
    dateQuotes = await res.json();

    let randomQuote = '';
    let randomAuthor = '';
    let randomNum = getRandomInt(dateQuotes.rus.length);

    if (lang == 'rus') {
        randomQuote = dateQuotes.rus[randomNum].text;
        randomAuthor = dateQuotes.rus[randomNum].author;
    } else if (lang == 'en') {
        randomQuote = dateQuotes.en[randomNum].text;
        randomAuthor = dateQuotes.en[randomNum].author;
    };

    quote.textContent = randomQuote;
    author.textContent = randomAuthor;
};



export default getQuotes

