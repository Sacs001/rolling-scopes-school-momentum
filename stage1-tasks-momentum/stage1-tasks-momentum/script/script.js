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
    console.log(currentTime)
    timerText.textContent = currentTime;
    timerDate.textContent = currentDate;
    timerTimeOfDay.textContent = `Good ${timeOfDay}`;

}, 1000);

enterYourName.addEventListener('change', (event) => {
    console.log(event)
    console.log(enterYourName.value)
})