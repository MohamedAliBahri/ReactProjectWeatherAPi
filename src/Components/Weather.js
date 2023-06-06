import React, { useState } from 'react'

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const apiKey = '895284fb2d2c50a520ea537456963d9c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
          console.log(responseData);
        })
        .catch((error) => {
          console.log('Error fetching weather data:', error);
        });
      setLocation('');
    }
  };

  return (
   
    <div className="app">
        
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

      </div>
    </div>
   
  );
}

export default Weather;
