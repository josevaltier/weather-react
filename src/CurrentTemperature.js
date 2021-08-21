import React from "react";

export default function CurrentTemperature() {
  return (
    <div className="container">
      <h1>It's Barcelona baby!</h1>
      <h2 id="description">Scattered clouds</h2>

      <div className="row">
        <div className="col-5 main-temp">30ºC</div>

        <img
          src="src/images/clouds.png"
          alt="clouds"
          className="main-emoji"
          id="descriptionIcon"
        />
      </div>

      <div className="min-max-temp">
        🌡️ <strong>Min</strong> 28º |<strong>Max</strong> 32º
      </div>

      <div className="row extra-values">
        <div className="col-5 humidity">
          💧<strong>Humidity</strong>:
          <br />
          30%
        </div>
        <div className="col-5 wind">
          🌬️<strong> Wind</strong>: <br />3 km/h
        </div>
      </div>
    </div>
  );
}
