var mainContainer = document.getElementById('mainContainer')
// var cityName = document.getElementById('cityName')
var submitBtn = document.getElementById('submitBtn')
// console.log(cityName)
var weatherContainer = document.getElementById('weatherContainer')

var apiKey = '2558952ed209b7b24ab70f771c61ff65'

async function getWeatherData() {

    var cityName = document.getElementById('cityName').value
    console.log(cityName)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    let res = await data.json()
    console.log(res)
    console.log(res.main.temp_max, res.name, res.weather[0].description)
    //object destructure
    const { humidity, temp, temp_max } = res.main
    console.log(humidity, temp, temp_max)


    weatherContainer.innerHTML =


        ` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtp6nvcOB4F4mUkfKHVYMmWyymq7DTpn6JQ&usqp=CAU"
                class="card-img-top" alt="weather" />
            <div class="card-body">
                <h5 class="card-title">Weather Details- ${cityName}</h5>
                <p class="card-text"><small class="text-muted">Humidity: <i class="bi bi-brightness-high-fill"></i>${humidity}</small></p>
                <p class="card-text"><small class="text-muted">Temp:<i class="bi bi-thermometer-sun"></i>${temp}</small></p>
                <p class="card-text"><small class="text-muted">Max-Temp:<i class="bi bi-thermometer-high"></i>${temp_max}</small></p>
                <p class="card-text">Weather:<i class="bi bi-cloud-drizzle-fill"></i> ${res.weather[0].description}</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>`


}