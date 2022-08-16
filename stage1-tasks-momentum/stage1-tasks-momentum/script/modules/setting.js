import { timeOfDayExport } from './timer.js'
import './greeting.js'

let settingActive = document.querySelector('.gears_setting');
let settingBg = document.querySelector('.setting_background');
let inputEn = document.querySelector('.en');
let inputRu = document.querySelector('.ru');


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
    document.querySelector('.greeting').textContent = `Good ${timeOfDayExport}`
});
inputRu.addEventListener('click', () => {
    if (timeOfDayExport == "morning") timeOfDayExportRu == 'утро';
    else if (timeOfDayExport == 'day') timeOfDayExportRu == 'день';
    else if (timeOfDayExport == 'evening') timeOfDayExportRu == 'вечер';
    else timeOfDayExportRu == 'ночи';
    document.querySelector('.greeting').textContent = `Добрый ${timeOfDayExportRu}`
});