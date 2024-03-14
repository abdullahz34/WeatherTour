import React from 'react';
import './App.css';

function CurrentLocation() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="Home.html">Home</a></li>
            <li><a href="#">What are your travel plans?</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>My Location</h2>
          <p id="location">Loading...</p>
          <div id="weather">
            <span id="weather-icon">☀️</span>
            <span id="temperature">...</span>
          </div>
          <div id="forecast">
            <div>00:00 <span id="temp-0">...</span></div>
            <div>01:00 <span id="temp-1">...</span></div>
            <div>02:00 <span id="temp-2">...</span></div>
            <div>03:00 <span id="temp-3">...</span></div>
            <div>04:00 <span id="temp-4">...</span></div>
          </div>
        </section>
      </main>

      <footer>
        <button>Settings</button>
      </footer>
    </div>
  );
}

export default CurrentLocation;