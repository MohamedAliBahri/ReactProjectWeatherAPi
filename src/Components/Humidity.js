import React, { useState } from "react";

function Humidity() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = "895284fb2d2c50a520ea537456963d9c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

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
    <div className="app2">
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
          <p>{data.name}</p>
        </div>
      </div>
      {data.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Humidity;
