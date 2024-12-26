import React from "react";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ fontSize: "20px", color: "#333" }}>
        Thời tiết tại: {weatherData.name}
      </h2>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Nhiệt độ: {weatherData.main.temp}°C
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Mô tả: {weatherData.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default WeatherInfo;
