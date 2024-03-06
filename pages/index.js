// import { use } from "chai";
import { useEffect, useState } from "react";
import Weatherapp from "./weatherapp";
export default function Home() {
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  const [weatherdata,setweatherdata] = useState([]);


  async function getWeatherData(event){
    event.preventDefault();
    if(lat&&lon){
      let data = await fetch( `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`);
      let res = await data.json();
      setweatherdata(res.properties.timeseries);
    }
  }
  return (
    <>
      <div id="root">
        <h1>Weather Forecast</h1>
        <form onSubmit={getWeatherData}>
          <label>Latitude:</label>
          <input type="text" className="latitude" onChange={(e)=>{setlat(e.target.value)}} value={lat}/>
          <label>Longitude:</label>
          <input type="text" className="longitude" onChange={(e)=>{setlon(e.target.value)}} value={lon}/>
         <button type="submit">Get Forecast</button>
        </form>
        <table>
      <thead>
          <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Summary</th>
          </tr>
      </thead>
      <tbody>
      {weatherdata.length>0?(<Weatherapp weatherdata={weatherdata}/>):("")}
      </tbody>
      </table>
        
      </div>
    </>
  );
}
