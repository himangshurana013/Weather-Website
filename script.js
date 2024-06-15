document.getElementById('getWeather').addEventListener('click', function() {
    const apiKey = 'ec7574461774af8bd74d8792d738ca48';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = '<p>City not found. Please try again.</p>';
        });
});
