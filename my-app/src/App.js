import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
        <div className="search-form">
          <input type="text" placeholder="Enter your city name"/>
          <button type="button">Search</button>
          </div>
          <div class="main-container">
            <h4>Live Weather Condition</h4>
            <div className="weather-icon">
              <i className="fa fa-sun"></i>
            </div> 
            <h3>Sunny</h3>
            <div className="temperature">
               <h1>25&deg;C</h1>
            </div>
          <div className="location">
            <h3><i className="fa fa-street-view"></i> Lahore / Pakistan</h3>
      </div>
      <div className="temperature-range">
        <h6>Min: 25&deg;C // Max: 28&deg;C // Humidity: 10%</h6>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
