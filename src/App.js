import './App.css';
import { useEffect, useState } from "react";

function App() {

  // useState상태 날씨 하나만 만들기 객체로 . 
  const [weather, setWeather] = useState({
    background:"",
    icon:"",
    temperature:"",
    description:""
  });



  function getCurrentPosition(){
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(resolve,reject);
    });
  }


  async function getWeather(){
      try{
        const API_KEY="";

        const position = await getCurrentPosition();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
          const result = await fetch(``)
          const parsed = await result.json();

          const id = parsed.weather[0].id;

          const copyWeather = {...weather, temperature : Math.round(parsed.main.temp) + "°C"};

            if(id >= 200 && id < 600){
              weather.background = "linear-gradient(120deg, #4b6cb7, #182848)" ; 
              weather.description = '비';
              weather.icon = "🌧️";
            }
            // id값이 600 보다 같거나 고 700보다 작은경우 눈
            else if(id >= 600 && id < 700){
              weather.background = "linear-gradient(120deg, #e6e9f0, #eef1f5)";
              weather.description = '눈';
              weather.icon = "❄️";
            }
            // id값이 801 보다 같거나 크면 흐림(구름)
            else if(id >= 801){
              weather.background = "linear-gradient(120deg, #89a7b1, #b8c6db)";
              weather.description ='흐림';
              weather.icon = "☁️";
            } else {
              weather.background = "linear-gradient(120deg, #a1c4fd, #c2e9fb)";
              weather.description = "맑음";
              weather.icon = "☀️";
  
            }
        
            setWeather(copyWeather);
            
          

      
    } catch(error){
      console.error(error);
    }
}

// 날씨 상태 변경 함수
  function changeWeather(condition) {

  const copyWeather={...weather};

  if (condition === "rain"){
    copyWeather.background = "linear-gradient(120deg, #4b6cb7, #182848)" ; 
    copyWeather.description = '비';
    copyWeather.icon = "🌧️";

  }else if(condition === "snow"){
    copyWeather.background = "linear-gradient(120deg, #e6e9f0, #eef1f5)";
    copyWeather.description = '눈';
    copyWeather.icon = "❄️";

  }else if(condition === "cloudy"){
    copyWeather.background = "linear-gradient(120deg, #89a7b1, #b8c6db)";
    copyWeather.description ='흐림';
    copyWeather.icon = "☁️";
  }else{
    copyWeather.background = "linear-gradient(120deg, #a1c4fd, #c2e9fb)";
    copyWeather.description = "맑음";
    copyWeather.icon = "☀️";
  }

  setWeather(copyWeather);
}

useEffect(()=>{
  getWeather();
},[]);




  return (
    <>
    <header className="header">
      <button onClick={()=>changeWeather('clear')}>맑음</button>
      <button onClick={()=>changeWeather('cloudy')}>흐림</button>
      <button onClick={()=>changeWeather('rain')}>비</button>
      <button onClick={()=>changeWeather('snow')}>눈</button>
    </header>

    <div className="snow">
      {
        weather ? (
          <div className="weather-container" style={{background: weather.background}}>
        <div className="weather-icon">{weather.icon}</div>
        <div className="weather-info">
          {/* 안에 함수를 쓸 수도 있음. changeTemperature */}
          <div className="temperature" ><span id="temperature">{weather.temperature}</span></div>
          <div className="description" >{weather.description}</div>

        </div>
      </div>
        ) : <div><span>로딩중..</span></div>
      }
    </div>

    </>
  );
}


export default App;



// const boards = [
//   {id: 1, title: "제목2", description: "내용", createdAt: "2025-02-05", writer: "운영자"},
//   {id: 2, title: "제목2", description: "내용1", createdAt: "2025-02-05", writer: "운영자2"},
//   {id: 3, title: "제목3", description: "내용2", createdAt: "2025-02-05", writer: "운영자3"}
// ]