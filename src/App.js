import './App.css';
import { useEffect, useState } from "react";

function App() {

  //동적인 상태 ? 날씨, 온도 , 날씨 description 은 어떻게 생각하지 ? 
  // useState상태 날씨 하나만 만들기 객체로 . 
  const [weather, setWeather] = useState({
    weatherState:"",
    description:"",
    temperature:""
  });

//   const weatherDescriptions = {
//     clear: "맑음",
//     cloudy: "흐림",
//     rain : "비",
//     snow: "눈",
// };

// 날씨 상태 변경 함수
  function changeWeather(weather){


  }



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
          const result = await fetch()
          const parsed = await result.json();
          // let temp = parsed.main.temp;
          // temp = Math.round(temp) + "°C";

          console.log(parsed);
        
          const copyWeather = {...weather};

          const id = parsed.weather[0].id;
          if(id >= 200 && id < 600){
            copyWeather.description="비";
          }else if(id >= 600 && id < 700){
            copyWeather.description = "눈";
          }else if(id >=801){
            copyWeather.description = "흐림";
          }else{
            copyWeather.description = "맑음";
          }  

          setWeather(copyWeather);

      
    } catch(error){
      console.error(error);
    }
}




function changeTemperature() {
  return 1 + "°C";
}

useEffect(()=>{
  getWeather();
},[]);


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
          {/* 안에 함수를 쓸 수도 있음. changeTemperature */}
          <div className="temperature" ><span id="temperature">{changeTemperature()}</span></div>
          <div className="description" >{weather.description}</div>

        </div>
      </div>
    </div>

    </>
  );
}

export default App;
