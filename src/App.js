import './App.css';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

function mySearchBar() {
  return (
    <form>
      <input placeholder='Enter a City'></input>
    </form>
  );
}

function App() {
    return (
      <div>
        <h1>Weather Tour!</h1>
        <p>Where are you travelling?</p>
        <mySearchBar />
      </div>
    );
  }

export default App;
