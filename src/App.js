import './App.css';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Weather Tour</h1>
        </header>
      </div>
    );
  }

export default App;
