import './App.css';
import { useState } from "react";

function App() {

  //동적인 상태 ? 날씨, 온도 , 날씨 description 은 어떻게 생각하지 ? 
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  const weatherDescriptions = {
    clear: "맑음",
    cloudy: "흐림",
    rain : "비",
    snow: "눈",
};

// 날씨 상태 변경 함수
  function changeWeather(weather){
    setWeather(weather);
    setWeatherDescription(weatherDescriptions[weather]);
  }






  async function getWeatherLatestVersion(){
    const API_KEY ="";

    const position = await getCurrentPosition();
    const latitude = position.coords.latitude;
    const logitude = position.coords.logitude;
    const url = await fetch();
    const parsed = await response.json();

    let temp = parsed.main.temp;
    temp = Math.round(temp) +  "°C";

    
  
  }





  return (
    <>
    <header className="header">
      <button onClick={()=>changeWeather(weather)}>맑음</button>
      <button onClick={()=>changeWeather(weather)}>흐림</button>
      <button onClick={()=>changeWeather(weather)}>비</button>
      <button onClick={()=>changeWeather(weather)}>눈</button>
    </header>

    <div className="snow">
      <div className="weather-container">
        <div className="weather-icon"></div>
        <div className="weather-info">
          <div className="temperature" ><span id="temperature">-1°C</span></div>
          <div className="description">흐림</div>

        </div>
      </div>
    </div>

    </>
  );
}

export default App;
