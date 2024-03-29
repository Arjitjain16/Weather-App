const apikey = "1e7f02117394d9170f507b28c2ba9c69"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    const data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clear"){
        weatherIcon.src = "Weather app/images/clear.png"
    }
    else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "Weather app/images/clouds.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "Weather app/images/rain.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "Weather app/images/mist.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "Weather app/images/snow.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "Weather app/images/mist.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Weather app/images/drizzle.png"
    }     
}

searchBtn.addEventListener("click" ,() =>{
    checkWeather(searchBox.value)
})
