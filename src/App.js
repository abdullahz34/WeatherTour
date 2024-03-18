import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Recommendations from './components/Recommendations';
import Alerts from './components/Alerts';
import Events from './components/Events';

const weather_api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: process.env.REACT_APP_WEATHER_API_BASE
}

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherData = (lat, lon, city) => {
    const currentWeatherFetch = fetch(`${weather_api.base}weather?lat=${lat}&lon=${lon}&appid=${weather_api.key}&units=metric`);
    const forecastFetch = fetch(`${weather_api.base}forecast/hourly?lat=${lat}&lon=${lon}&appid=${weather_api.key}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city, ...weatherResponse });
        setForecast({ city, ...forecastResponse });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    fetchWeatherData(lat, lon, searchData.label);
  };

  useEffect(() => {
    const lat = 51.5074; // latitude for London
    const lon = -0.1278; // longitude for London
    fetchWeatherData(lat, lon, 'London, GB');
  }, []);

  console.log(currentWeather);
  console.log(forecast);



  return (
      <>
      <div className='container'>
        <header className="header">
          <h1>Weather Tour</h1>
        </header>
        <div className='search'>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        {currentWeather && <CurrentWeather data={currentWeather} />} {/* only render the CurrentWeather component if currentWeather is not null */}
        {forecast && <Forecast data={forecast} />}
        {currentWeather && <Recommendations data={currentWeather} />}
        {currentWeather && <Alerts data={currentWeather} />}
        {currentWeather && <Events data={currentWeather} />}
      </div>
    </>
  );
};
export default App;


