import weatherImg from "./assets/images/weather1.png"
import './App.css'
import { useEffect, useState } from "react"


function App() {
  let [temp, setTemp] = useState(0)
  let [wind, setWind] = useState(0)
  let [humidity, setHumidity] = useState(0)
  let [maxtemp, setMaxtemp] = useState(0)
  let [mintemp, setMintemp] = useState(0)
  let [city,setCity] = useState("mathura")
  let [toggler,setToggler] = useState(true)
  useEffect(() => {
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=BG5O2ad9Uj2QGNfbb29lERNmk60Umgkq`;
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data.timelines.daily[0])
        console.log(data.timelines.daily[0].values)
        const weather = data.timelines.daily[0].values;
        let temp = weather.temperatureAvg
        setTemp(temp)
        let wind = weather.windSpeedAvg
        setWind(wind)
        let humidity = weather.humidityAvg
        setHumidity(humidity)
        let maxtemp = weather.temperatureMax
        setMaxtemp(maxtemp)
        let mintemp = weather.temperatureMin
        setMintemp(mintemp)
      })
      .catch((error) => {
        console.log(error);
      })

    console.log("hello")
  }, [toggler]);



  return (
    <>
      <div className="mainbox">
        <div className="topbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/>
          <button onClick={()=>setToggler(!toggler)}>Go</button>
        </div>
        <div className="weather-img">
          <img src={weatherImg} alt="" />
        </div>
        <div className="weather-details">
          <p>Tuesday | Jun 18</p>
          <h1 className='temp'>{temp}°</h1>
          <p className='weather-status'>Sunny</p>
          <div className="other-details">
            <div className="detail">
              <i className="fa-solid fa-location-arrow"></i>
              <div>
                <p className='wind'>{wind}km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className="detail">
              <i className="fa-solid fa-temperature-full"></i>
              <div>
                <p className='max-temp'>{maxtemp}°</p>
                <p>Max Temperature</p>
              </div>
            </div>
            <div className="detail">
              <i className="fa-solid fa-temperature-half"></i>
              <div>
                <p className='min-temp'>{mintemp}°</p>
                <p>Min temperature</p>
              </div>
            </div>
            <div className="detail">
              <i className="fa-solid fa-droplet"></i>
              <div>
                <p className='humidity'>{humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
