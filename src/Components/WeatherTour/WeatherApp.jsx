import React from 'react'
import './WeatherApp.css'
import axios from 'axios';

import logo from '../Assets/wt-logo.png'

function WeatherApp() {
    return (
        <div className='bg'>
            <div className='container'>
            <header className = "topbar">
                <img src = {logo} alt = 'logo' />
                <ul>
                    <li>Something</li>
                    <li>Settings</li>
                </ul>
            </header>
            <div className='weather-info'>
                <h1>Where are you travelling?</h1>
                <form id = 'city'>
                    <input type="text" className="city-input" placeholder='Enter a city'/>
                    <button>Search</button>
                </form>
                <div className="weather-info-box">
                    <div className="main-weather">

                    </div>
                    <div className="future-weather">

                    </div>
                </div>
            </div>
            <div className="event-info">
                <h1>Events near you</h1>
                <div className="event-info-box">

                </div>
            </div>
            <div className="recommendations">
                
            </div>
            <div className="warning">

            </div>
            </div>
        </div>
    )
}

export default WeatherApp
