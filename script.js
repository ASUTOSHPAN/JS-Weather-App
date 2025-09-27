const apiKey = "bd174468622d7a043ce75e5e31d616eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // console.log(response);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KM/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Cloud img.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Clear img.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Rain img.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Drizzle img.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Mist img.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
 });