import React from 'react';
import Search from './components/Search';
import './App.css';

// const api = {
//     key: process.env.REACT_APP_WEATHER_API_KEY,
//     base: process.env.REACT_APP_WEATHER_API_BASE
//   }

const App = () => {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
  <div className="container">
    <header className = "header">
      <h1>Weather Forecast App</h1>
    </header>
    <Search onSearchChange={handleOnSearchChange}/>
  </div>
  );
};
export default App;


