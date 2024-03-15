import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  //const navigate = useNavigate();
  //const gotoLocation = () =>{
    //navigate('/CurrentLocation');
  //};

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca7fa4eea17f1ddca4179ea69c71470b`);
      setWeatherData(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  };
  

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  
  return (
    <div>
      <div class="current-location">
        <button>Current Location: </button>
      </div>

      <h1>Where are you travelling?</h1>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={handleInputChange}
        />
        <button type="submit">Search</button>
        </form>
        {weatherData ? (
        <>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Description: {weatherData.weather[0].description}</p>
        </>
        ) : (
        <p>Loading weather data...</p>
        )}
        </div>
  );

};
export default App;
