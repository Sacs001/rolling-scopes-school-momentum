// Quotes ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let quoyesBtn = document.querySelector(".change-quotes");
let quotes = document.querySelector('.quote');
let author = document.querySelector('.author');

async function getQuotes() {
    const quotes = '../dataQuotes.json';
    const res = await fetch(quotes);
    let dateQuotes = await res.json();
    return dateQuotes
};

getQuotes();

