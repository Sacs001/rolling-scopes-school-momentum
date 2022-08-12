import playList from "./playList.js";

// timer

let timerText = document.querySelector(".time");
let timerDate = document.querySelector('.date');
let timerTimeOfDay = document.querySelector(".greeting");
let enterYourName = document.querySelector(".name");
let currentTime = '';
let currentDate = '';
let timeOfDay = ''


function timer() {
    const date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    currentTime = date.toLocaleTimeString();
    currentDate = date.toLocaleDateString('en-US', options);
}

function getTimeOfDay() {
    timer()
    let hours = currentTime.split(':');
    if (hours[0] >= 6 && hours[0] <= 12) timeOfDay = "morning";
    else if (hours[0] > 12 && hours[0] <= 18) timeOfDay = "day";
    else if (hours[0] > 18 && hours[0] <= 22) timeOfDay = "evening";
    else timeOfDay = "night";
}


setInterval(() => {
    timer();
    getTimeOfDay();
    timerText.textContent = currentTime;
    timerDate.textContent = currentDate;
    timerTimeOfDay.textContent = `Good ${timeOfDay}`;

}, 1000);


// Local Storage

document.addEventListener("beforeunload", () => {
    localStorage.setItem('name', enterYourName.value)
});

document.addEventListener("load", () => {
    if (localStorage.getItem("name")) enterYourName.value = LocalStorage.getItem('name')

});


// API Weather card

let city = document.querySelector('.city');
let temperature = document.querySelector('.temperature');
let wetherDescript = document.querySelector('.weather-description');
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherIcon = document.querySelector('.weather-icon');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=631d17c56a4027b7af59f555f403a533&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
    wetherDescript.textContent = data.weather[0].description;
    wind.textContent = `wind speed: ${Math.trunc(data.wind.speed)}m/s`;
    humidity.textContent = `humidity: ${data.main.humidity}%`
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
};

getWeather()

city.addEventListener('change', async () => {
    getWeather()
});



// Slider

let slidePrev = document.querySelector(".slide-prev");
let slideNext = document.querySelector(".slide-next");

let bodyPicture = document.body;



function getRandomInt(max) {
    let result = String(Math.floor(Math.random() * max));
    if (result == 0) result = 1;
    return result
}

let num = getRandomInt(20);


function setBg(numPicture) {
    numPicture = String(numPicture);
    if (numPicture.length == 1) {
        numPicture = '0' + numPicture;
    };
    let img = new Image;
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${numPicture}.jpg`;
    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url("${img.src}")`;
    })
}
setBg(num)


slidePrev.addEventListener('click', () => {
    if (num == '01') {
        num = '20';
        setBg(num);
    } else {
        num--
        setBg(num)
    }
})

slideNext.addEventListener('click', () => {
    if (num == '20') {
        num = '01';
        setBg(num);
    } else {
        num++
        setBg(num)
    }
})

// Quotes ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let quoyesBtn = document.querySelector(".change-quotes");
let quotes = document.querySelector('.quote');
let author = document.querySelector('.author');

async function getQuotes() {
    let quotes = "data.json";
    let res = await fetch(quotes);
    let data = await res.json();
    // console.log(data)
}

getQuotes()


// Music Player

let play = document.querySelector(".play");
let playNext = document.querySelector(".play-next");
let playPrev = document.querySelector(".play-prev");
let isPlay = false;
let playNum = 0;
let audio = new Audio;

console.log(playList);
function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play
}

function stopAudio() {
    audio.pause()
}

play.addEventListener('click', () => {
    play.classList.toggle("pause");
    if (!isPlay) {
        console.log('done');
        isPlay = true;
        playAudio();

    } else {
        console.log('not done')
        isPlay = false;
        stopAudio();
    }
})
