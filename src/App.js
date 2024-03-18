import React from 'react';
import { useState } from 'react';
import Search from './components/Search';
import './App.css';
import CurrentWeather from './components/CurrentWeather';

const weather_api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: process.env.REACT_APP_WEATHER_API_BASE
}

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData)
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${weather_api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${weather_api.key}&units=metric`)
    const forecastFetch = fetch(`${weather_api.base}forecast/hourly?lat=${lat}&lon=${lon}&units=metric&appid=${weather_api.key}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <header className="header">
        <h1>Weather Forecast App</h1>
      </header>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />} {/* only render the CurrentWeather component if currentWeather is not null */}
    </div>
  );
};
export default App;


