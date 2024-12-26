import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Content from "./components/Example/Content";
import ReSize from "./components/Example/ReSize";
import Avatar from "./components/Example/Avatar";

import SearchForm from "./components/Waether/SearchForm";
import WeatherInfo from "./components/Waether/WeatherInfo";
import ErrorMessage from "./components/Waether/ErrorMessage";

function App() {
  const [showContent, setShowContent] = useState(true);
  const [showReSize, setShowReSize] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);

  // const [city, setCity] = useState(""); // Tên thành phố
  // const [weatherData, setWeatherData] = useState(null); // Dữ liệu thời tiết
  // const [error, setError] = useState(null); // Lỗi (nếu có)

  // const API_KEY = "631ac06ce6bb6ea76f7ebbe0981c39c5"; // Thay bằng API Key của bạn từ OpenWeather

  // const fetchWeather = async () => {
  //   if (!city) return; // Không làm gì nếu chưa nhập tên thành phố
  //   try {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Không tìm thấy thành phố!");
  //     }
  //     const data = await response.json();
  //     setWeatherData(data);
  //     setError(null);
  //   } catch (err) {
  //     setError(err.message);
  //     setWeatherData(null);
  //   }
  // };

  return (
    <div className="App">
      <button onClick={() => setShowContent(!showContent)}>Content</button>
      <button onClick={() => setShowReSize(!showReSize)}>ReSize</button>
      <button onClick={() => setShowAvatar(!showAvatar)}>Avatar</button>
      {showContent && <Content />}

      {showReSize && <ReSize />}

      {showAvatar && <Avatar />}
    </div>
    // <div
    //   style={{
    //     textAlign: "center",
    //     fontFamily: "Arial, sans-serif",
    //     padding: "20px",
    //   }}
    // >
    //   <h1 style={{ fontSize: "24px", color: "#333" }}>Ứng dụng Thời tiết</h1>
    //   <SearchForm city={city} setCity={setCity} fetchWeather={fetchWeather} />
    //   {error && <ErrorMessage error={error} />}
    //   {weatherData && <WeatherInfo weatherData={weatherData} />}
    // </div>
  );
}

export default App;
