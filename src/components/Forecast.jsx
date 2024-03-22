import React from 'react';
import './Forecast.css';

// Forecast component to display weather forecast
const Forecast = ({ data }) => {
    return (
        <div className="forecast">
            {/* Map through the first 6 items in the list array from the data prop */}
            {data.list.slice(0, 6).map((hour, index) => (
                <div key={index} className="forecast-hour">
                    {/* Convert the date from Unix timestamp to a readable format and display the hour */}
                    <p>{new Date(hour.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</p>
                    {/* Display the weather icon */}
                    <img src={`icons/${hour.weather[0].icon}.png`} alt="weather" className="weather-icon-down" />
                    {/* Display the temperature, rounded to the nearest whole number, and add the degree Celsius symbol */}
                    <p>{Math.round(hour.main.temp)}&deg;C</p>
                </div>
            ))}
        </div>
    );
};

export default Forecast;