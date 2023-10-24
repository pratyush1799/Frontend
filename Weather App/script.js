const apiKey = "b2f95f7c450dcd045ea7fd4ce8685769";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".weather").style.display = "block";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        console.log(data.weather[0].main);
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "/Weather App/images/clouds.png";
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "/Weather App/images/snow.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/Weather App/images/rain.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/Weather App/images/mist.png";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/Weather App/images/drizzle.png";
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/Weather App/images/clear.png";
        }
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
