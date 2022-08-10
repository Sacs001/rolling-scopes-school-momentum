// timer

let timerText = document.querySelector(".time");
let timerDate = document.querySelector('.date');
let currentTime = '';
let currentDate = '';


function timer() {
    const date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    currentTime = date.toLocaleTimeString();
    currentDate = date.toLocaleDateString('en-US', options);
}

setInterval(() => {
    timer()
    timerText.textContent = currentTime;
    timerDate.textContent = currentDate
}, 1000);