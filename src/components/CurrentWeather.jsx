import React from 'react'
import './CurrentWeather.css'

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <p><span className="city">{data.city}</span> <span className="temp">{Math.round(data.main.temp)}&deg;C</span></p>
            </div>
            <div className="middle">
                {/* Display the weather icon for the current weather, fetches icon name from weather api and inserts */}
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon-up" />
                <div className="weather-main-details">
                    <div className="wind-container">
                        <img src="icons/wind.png" alt="wind" className="wind-icon" />
                        <p className="wind">{data.wind.speed}m/s</p>
                    </div>
                    <div className="humidity-container">
                        <img src="icons/humidity.png" alt="humidity" className="humidity-icon" />
                        <p className="humidity">{data.main.humidity}%</p>
                    </div>
                </div>
            </div>
            <div className="bottom flex-container">
                <div>
                    {/* Rounded to the nearest whole number for clarity */}
                    <p className="feelslike">Feels like: {Math.round(data.main.feels_like)}&deg;C</p>
                    <p className="pressure">Pressure: {data.main.pressure} hpa</p>
                </div>
                <div>
                    <p className="weather-description">{capitalizeFirstLetter(data.weather[0].description)}</p>
                    {/* Current date, british format by default */}
                    <p className="date">{new Date().toLocaleDateString('en-GB')}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;