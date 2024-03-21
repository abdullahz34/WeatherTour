import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import './App.css';
import './components/mobile.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Recommendations from './components/Recommendations';
import Alerts from './components/Alerts';
import Events from './components/Events';

const weather_api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: process.env.REACT_APP_WEATHER_API_BASE
}

const POI_api = {
  key: process.env.REACT_APP_POI_KEY,
  secret: process.env.REACT_APP_POI_SECRET
}

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [poiData, setPoiData] = useState(null);

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


  // This useEffect hook runs whenever the currentWeather state changes.
  // When currentWeather changes, it means that the user has searched for a new location.
  useEffect(() => {
    if (currentWeather) {
      const lat = currentWeather.coord.lat;
      const lon = currentWeather.coord.lon;

      // First, we fetch the access token from the Amadeus API.
      // We need this token to authenticate our subsequent request to the Points of Interest API.
      fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${POI_api.key}&client_secret=${POI_api.secret}`
      })
        .then(response => response.json())
        .then(data => {
          const token = data.access_token;

          // Once we have the access token, we can fetch the points of interest.
          // We include the access token in the Authorization header of our request.
          fetch(`https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${lat}&longitude=${lon}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            // We convert the response to JSON and then store the data in the poiData state.
            .then(response => response.json())
            .then(data => setPoiData(data));
        });
    }
  }, [currentWeather]);

  console.log(currentWeather);
  console.log(forecast);
  console.log(poiData);



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
        {poiData && <Events data ={currentWeather} poiData={poiData} />}
      </div>
    </>
  );
};
export default App;


