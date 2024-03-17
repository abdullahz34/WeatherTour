import React from 'react';
import './WeatherTour.css';

import cloudy_icon from '../Assets/cloudy-icon.png'
import lighting_icon from '../Assets/lightning-icon.png'
import partial_icon from '../Assets/partial-icon.png'
import rain_icon from '../Assets/rain-icon.png'
import snow_icon from '../Assets/snow-icon.png'
import sun_icon from '../Assets/sun-icon.png'
import wind_icon from '../Assets/wind-icon.png'

const WeatherTour = () => {
  return (
    <div className = 'container'>
      <div className="left-container">
        <div className = 'top-bar'>
          <h1>Where are you travelling?</h1>
          <div className="text-box">
            <input type="text" className="city-input" placeholder = "Enter a city" />
          </div>
        </div>
        <div className="weather-info">

        </div>
      </div>
      <div className="right-container">
        <div className="top-bar2">
          <h1>Events near you</h1>
        </div>
        <div className="events-info">

        </div>
      </div>
    </div>
  )
}

export default WeatherTour