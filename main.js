




const apiKey = "f90ae86c2b1b87c2f0e9d9ee485f97e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    let data = await response.json();
    // console.log(data);

    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./img/clouds.png";
    }
    else if(data.weather[0].main == "Clean"){
        weatherIcon.src = "./img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./img/snow.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    searchBox.value = "";

    };

    
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});