function weatherChecker() {

    let name = document.getElementById("name");
    let temperature = document.getElementById("temperature");
    let like = document.getElementById("feels-like");
    let humidity = document.getElementById("humidity");
    let getCity = document.getElementById("getcity").value;
    let condition = document.getElementById("condition");
    let weatherImage = document.getElementById("icon");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=c491c88304589c7f7da226d8a534e7eb&units=metric`)
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => {

            console.log(data);

            let getName = data.name;
            let getTemp = Math.round(data.main.temp);
            let getLike = Math.round(data.main.feels_like);
            let getHumidity = data.main.humidity;


            if (data.weather[0].main == "Clear") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/clear.gif";
            }
            else if (data.weather[0].main == "Clouds") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/cloudy.gif";
            }
            else if (data.weather[0].main == "Rain") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/rain.gif";
            }
            else if (data.weather[0].main == "Snow") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/snow.gif";
            }
            else if (data.weather[0].main == "Thunderstorm") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/thunderstorm.gif";
            }
            else if (data.weather[0].main == "Drizzle") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/drizzle.gif";
            }
            else if (data.weather[0].main == "Mist") {
                condition.textContent = "Weather Condition: " + data.weather[0].description;
                weatherImage.src = "images/foggy.gif";
            }


            name.textContent = getName + ", " + data.sys.country;
            temperature.textContent = getTemp + "°C";
            like.textContent = "Feels Like: " + getLike + "°C";
            humidity.textContent = "Humidity: " + getHumidity + "%";

        })
        .catch(error => {
            console.error(error);
        });
};