import './App.css';
import { useEffect, useState } from "react";

function App() {

  //동적인 상태 ? 날씨, 온도 , 날씨 description 은 어떻게 생각하지 ? 
  // useState상태 날씨 하나만 만들기 객체로 . 
  const [weather, setWeather] = useState({
    background:"",
    icon:"",
    temperature:"",
    description:""
  });

  // const weatherDescriptions = {
  //   clear: "맑음",
  //   cloudy: "흐림",
  //   rain : "비",
  //   snow: "눈",
  // };

// 날씨 상태 변경 함수


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

          // let condition = '맑음음';

            if(id >= 200 && id < 600){
              condition = '비비';
            }
            // id값이 600 보다 같거나 고 700보다 작은경우 눈
            else if(id >= 600 && id < 700){
              condition = '눈눈';
            }
            // id값이 801 보다 같거나 크면 흐림(구름)
            else if(id >= 801){
              condition ='흐림림';
            }
         
          //   const temp = Math.round(parsed.main.temp) + "°C";
          //   setWeather({temp, weatherDescriptions: condition});
            
          

      
    } catch(error){
      console.error(error);
    }
}

// 날씨 상태 변경 함수
function changeWeather(weather) {
  // const body = document.body;
  // const description = document.querySelector(".description");
  // body.className = weather;

  // 날씨 설명 업데이트
  const weatherDescriptions = {
    clear: "맑음",
    cloudy: "흐림",
    rain: "비",
    snow: "눈",
  };
  return weatherDescriptions[weather];
  
}


function weatherDescription(){
  let koreanWeather = "";

  const id = weather.weather[0].id;

  if(id >= 200 && id < 600){
    koreanWeather = changeWeather('rain');
  }
  // id값이 600 보다 같거나 크고 700보다 작은경우 눈
  else if(id >= 600 && id < 700){
    koreanWeather = changeWeather('snow')
  }
  // id값이 801 보다 같거나 크면 흐림(구름)
  else if(id >= 801){
    koreanWeather = changeWeather('cloudy');
  }
    // 그 외에는 맑음
  else{
    koreanWeather = changeWeather('clear');
  }

  return koreanWeather;
}

function weatherBackground() {
  const id = weather.weather[0].id;
  let background = "linear-gradient(120deg, #a1c4fd, #c2e9fb)"
  
  if(id >= 200 && id < 600){
    background = "linear-gradient(120deg, #4b6cb7, #182848)"  
  }
  // id값이 600 보다 같거나 크고 700보다 작은경우 눈
  else if(id >= 600 && id < 700){
    background = "linear-gradient(120deg, #e6e9f0, #eef1f5)"
  }
  // id값이 801 보다 같거나 크면 흐림(구름)
  else if(id >= 801){
    background = "linear-gradient(120deg, #89a7b1, #b8c6db)"
  }

  return background;

}

function weatherIcon() {
  const id = weather.weather[0].id;
  let icon = "☀️";
  
  if(id >= 200 && id < 600){
    icon = "🌧️"; 
  }
  // id값이 600 보다 같거나 크고 700보다 작은경우 눈
  else if(id >= 600 && id < 700){
    icon = "❄️";
  }
  // id값이 801 보다 같거나 크면 흐림(구름)
  else if(id >= 801){
    icon = "☁️";
  }

  return icon;

}


function changeTemperature() {
  return Math.round(weather.main.temp) + "°C";
}

useEffect(()=>{
  getWeather();
},[]);




  return (
    <>
    <header className="header">
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



const boards = [
  {id: 1, title: "제목2", description: "내용", createdAt: "2025-02-05", writer: "운영자"},
  {id: 2, title: "제목2", description: "내용1", createdAt: "2025-02-05", writer: "운영자2"},
  {id: 3, title: "제목3", description: "내용2", createdAt: "2025-02-05", writer: "운영자3"}
]