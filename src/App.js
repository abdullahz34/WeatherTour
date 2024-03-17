import React from 'react';
import Search from './components/Search';
import './App.css';
import WeatherApp from './Components/WeatherTour/WeatherApp.jsx';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

function App() {
    return (
      <div className = "App">
        <WeatherApp />
      </div>
    );
  }

export default App;


