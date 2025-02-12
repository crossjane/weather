import './App.css';

function App() {

  
  // const [] = useSata



  // async function getWeatherLatestVersion(){
  //   const API_KEY ="";

  //   const position = await getCurrentPosition();
  //   const latitude = position.coords.latitude;
  //   const logitude = position.coords.logitude;
  //   const url = await fetch();
  //      const parsed = await response.json();

  //   let temp = parsed.main.temp;
  //   temp = Math.round(temp) +  "°C";

    
  
  // }





  return (
    <>
    <header className="header">
      <button>맑음</button>
      <button>흐림</button>
      <button>비</button>
      <button>눈</button>
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
