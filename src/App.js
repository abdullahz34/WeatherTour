import './App.css';

function App() {
  return (
    <div className="container">
      <div className="current-location">
        <a href="Current_Location.html"><button id="current-location-btn">Current Location: </button></a>
      </div>
      <div className="travel-query">
        <h1>Where are you travelling?</h1>
        <form action="Search_Location.html" method="get">
          <input type="text" placeholder="Enter a city" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="travel-plans">
        <button>What are your travel plans?</button>
      </div>
      <div className="settings">
        <button>Settings</button>
      </div>
    </div>
  );
}

export default App;
