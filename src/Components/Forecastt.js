import React, { useState } from "react";

function Forecast() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = "895284fb2d2c50a520ea537456963d9c";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
          console.log(responseData);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });
      setLocation("");
    }
  };

  return (
    <div className="app3">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="top" align="center">
        <div className="location">
          <h2>{data.city ? data.city.name : ""}</h2>
        </div>
      </div>

      {data.list && (
        <div className="bottom">
          <h3>Weather Forecast:</h3>
          <div className="forecast-container">
            {data.list.map((forecast, index) => {
              if (index % 8 === 0) {
                // Displaying only one forecast per day (every 8th item)
                return (
                  <div className="forecast-item" key={forecast.dt}>
                    <div className="date">
                      <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                    </div>
                    <div className="temperature">
                      <p>{forecast.main.temp.toFixed()}°F</p>

                      <p>{forecast.weather[0].description}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;
