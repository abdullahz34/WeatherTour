import './App.css';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

function App() {
    return (
      <div className="App">
          <h1>Weather Tour</h1>
      </div>
    );
  }

export default App;
