// API Weather card

let city = document.querySelector('.city');
let temperature = document.querySelector('.temperature');
let wetherDescript = document.querySelector('.weather-description');
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherIcon = document.querySelector('.weather-icon');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=9989e58164052059117672bc4a4c7cd1&units=metric`;
    const res = await fetch(url);
    const dataWeather = await res.json();
    temperature.textContent = `${Math.trunc(dataWeather.main.temp)}°C`;
    wetherDescript.textContent = dataWeather.weather[0].description;
    wind.textContent = `wind speed: ${Math.trunc(dataWeather.wind.speed)}m/s`;
    humidity.textContent = `humidity: ${dataWeather.main.humidity}%`
    weatherIcon.classList.add(`owf-${dataWeather.weather[0].id}`)
};

getWeather()

city.addEventListener('change', async () => {
    getWeather()
});
