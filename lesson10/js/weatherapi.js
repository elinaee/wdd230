const currentTemp = document.querySelector("#current-temp");
const minTemp = document.querySelector("#min");
const maxTemp = document.querySelector("#max");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("figcaption");
const windDesc = document.querySelector("#wind-desc");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=11a2e58d6328f2a786e3358f2c695671`;

apiFetch(url);

function displayResults (weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    minTemp.innerHTML = weatherData.main.temp_min.toFixed(1);
    maxTemp.innerHTML = weatherData.main.temp_max.toFixed(1);
    


    const descweather = weatherData.weather[0].description;
    const descweatherdisplay = descweather.split(" ");
    for (var i = 0; i < descweatherdisplay.length; i++) {
        descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
    }
    const descweather2 = descweatherdisplay.join(" ");

    const descwind = weatherData.wind.speed.toFixed(1);
    weatherIcon.setAttribute("src", weatherimagesrc);
    weatherIcon.setAttribute("alt", descweather);
    weatherDesc.innerHTML = descweather2;
    windDesc.innerHTML = descwind;
}

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
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

apiFetch();