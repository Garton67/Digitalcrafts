const textBox = document.getElementById("textBox")
const btnSubmittedLocation = document.getElementById("btnSubmittedLocation")
const weatherContainer = document.getElementById("weatherContainer")

function kelvinToFahrenheit(temp) {
    let fahrenheit = 9/5*(temp-273)+32
    return Math.floor(fahrenheit)
}


function displayWeather(result) {
    const weather = `<div class="weather">
    <br>
    <u>Today's Weather for ${result.name}:</u>
    <p>Current Temp: ${kelvinToFahrenheit(result.main.temp)}°F</p>
    <p>Today's High: ${kelvinToFahrenheit(result.main.temp_max)}°F</p>
    <p>Today's Low: ${kelvinToFahrenheit(result.main.temp_min)}°F</p>
    <p>Barometric Pressure: ${result.main.pressure} mbar</p>
    <br>
    </div>
    ` 
    weatherContainer.innerHTML = weather
    textBox.value = ""
}


btnSubmittedLocation.addEventListener("click", function() {
    event.preventDefault()
    const zip = textBox.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=7854a55d120c660937735dcc91b9ec67
    `)
    .then(response => {
        return response.json()
    }).then(result => {
        displayWeather(result)        
    })
  })

