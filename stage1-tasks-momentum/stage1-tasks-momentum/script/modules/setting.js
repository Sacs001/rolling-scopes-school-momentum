import { timeOfDayExport } from './timer.js'
import getQuotes from './quotes.js';
import getWeather from './weather.js';
import './greeting.js'

// Quotes
let quotesBtn = document.querySelector(".change-quote");
let settingActive = document.querySelector('.gears_setting');
let settingBg = document.querySelector('.setting_background');
let inputEn = document.querySelector('.en');
let inputRu = document.querySelector('.ru');
let language = 'rus';

// GEt Weather
let city = document.querySelector('.city');


document.addEventListener('load', () => {
    if (localStorage.getItem("langApp")) language = LocalStorage.getItem('langApp');
    else language = 'rus';   //ON develop
    if (localStorage.getItem("cityWeather")) {
        city.textContent = LocalStorage.getItem('cityWeather')
        getWeather(city.value, language)
    }
    else {
        city.value = 'Minsk';
        getWeather(city.value, language)
    }
    console.log(language)
})

// Загрузка приложения quotes
settingActive.addEventListener('click', () => {
    settingActive.classList.toggle('active');
    if (settingActive.classList.contains('active')) {
        settingBg.style.visibility = "visible";
        settingBg.style.opasity = "1";
    } else {
        settingBg.style.visibility = "hidden";
        settingBg.style.opasity = "0";
    }
})

let timeOfDayExportRu = '';
inputEn.addEventListener('click', () => {
    document.querySelector('.greeting').textContent = `Good ${timeOfDayExport}`;
    language = 'en';
    localStorage.setItem('langApp', language)
});

inputRu.addEventListener('click', () => {
    if (timeOfDayExport == "morning") timeOfDayExportRu == 'утро';
    else if (timeOfDayExport == 'day') timeOfDayExportRu == 'день';
    else if (timeOfDayExport == 'evening') timeOfDayExportRu == 'вечер';
    else timeOfDayExportRu == 'ночи';
    document.querySelector('.greeting').textContent = `Добрый ${timeOfDayExportRu}`;
    language = 'rus';
    localStorage.setItem('langApp', language)
});

quotesBtn.addEventListener('click', () => {
    getQuotes(language);

})

city.addEventListener('change', async () => {
    getWeather(city.value)
});