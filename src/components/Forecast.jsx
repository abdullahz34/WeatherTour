import React from 'react';
import './Forecast.css';

const Forecast = ({ data }) => {
    return (
        <div className="forecast">
            {data.list.slice(0, 6).map((hour, index) => (
                <div key={index} className="forecast-hour">
                    <p>{new Date(hour.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</p>
                    <img src={`icons/${hour.weather[0].icon}.png`} alt="weather" className="weather-icon" />
                    <p>{Math.round(hour.main.temp)}&deg;C</p>
                </div>
            ))}
        </div>
    );
};

export default Forecast;