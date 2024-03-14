const API_KEY = 'ccb3c8b31862dd7e4540c36051b096ce';

function fetchWeatherData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=zh_cn`;
            const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=zh_cn`;

            //current location weather info
            fetch(API_URL)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('location').textContent = data.name; // location name
                    document.getElementById('temperature').textContent = `${data.main.temp}°C`; // temperature
            
                })
                
                .catch(error => console.error('Can nat get temperature info', error));

            //futur time weather info
            fetch(FORECAST_API_URL)
                .then(response => response.json())
                .then(data => {

                    for (let i = 1; i <= 3; i++){
                        const forecast = data.list[i]
                        const time = new Date(forecast.dt * 1000).getHours();
                        const temp = forecast.main.temp;
                        const elementID = 'temp-${time}';
                        if(document.getElementById(elementID)){
                            document.getElementById(elementID).textContent = '${temp}°C';
                        }
                    }
                })
                .catch(error => console.error('Can not get future weather data', error));
        }, () => {
            alert('Can not get the location form your device');
        });
    } else {
        alert('The browser does not support geolocation.');
    }
}

//after loding get the info
window.onload = fetchWeatherData;
