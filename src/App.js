import React from "react";

import { Route, Routes } from "react-router-dom";
import Weather from "./Components/Weather";
import Humidity from "./Components/Humidity";
import NavigationBar from "./Components/Navigation";
import NotFound from "./Components/NotFound";
import Forecast from "./Components/Forecastt";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/more" element={<Humidity />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
