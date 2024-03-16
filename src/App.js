import './App.css';
import Header from './Components/WeatherTour/Header.jsx';
import WeatherTour from './Components/WeatherTour/WeatherTour.jsx';

// const api = {
//     key: process.env.REACT_APP_API_KEY,
//     base: process.env.REACT_APP_API_BASE
//   }

function App() {
    return (
      <div className = "App">
        <Header />
        <WeatherTour />
      </div>
    );
  }

export default App;
