import './App.css';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_BASE
  }

function App() {
    return (
      <div>
        <h1 id = "title">Weather Tour</h1>
        <form>
          <label>Where are you travelling?</label>
          <br/>
          <input
            type = "text"
            required
          />
          <br/>
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }

export default App;
