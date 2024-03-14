const url = "https://api.openweathermap.org/data/2.5/weather?q=calabar,NG&appid=a700c849c09401d73d3e8ad6dd55ee20"

let WeatherIcon = document.querySelector('#weather-icon');
let CurrentTemp = document.querySelector('#temp-value');
let WindSpeedKm = document.querySelector('#wind-speed-value');
let WindChillDisplay = document.querySelector('#wind-chill-display');
let WeatherDesc = document.querySelector('#weather-desc');



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// //console.log(data);
apiFetch();

function displayResults(weatherData) {
    const tempCelsius = (weatherData.main.temp - 32) * 5 / 9;
    const windSpeedKm = weatherData.wind.speed * 1.609;

    CurrentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // const iconsrc = "http://openweathermap.org/img/wn/10d@2x.png"


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;


    WeatherIcon.setAttribute('src', iconsrc);
    WeatherIcon.setAttribute('alt', desc);
    WeatherDesc.textContent = desc;

    WindSpeedKm.innerHTML = `${windSpeedKm.toFixed(2)}`;


    let windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(windSpeedKm, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(windSpeedKm, 0.16);

    if (weatherData.main.speed < 3 && weatherData.main.temp <= 40) {
        WindChillDisplay.textContent = windChill.toFixed(2) + "°F";
    } else {
        WindChillDisplay.textContent = "N/A";
    }
}


displayResults();