import React, { useState } from 'react'
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';
// import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    //  console.log(response.data);
  setForecast(response.data.list);
  setLoaded(true);
 
}
//  console.log(props)

if (loaded) {

  console.log(forecast);

   return (
   <div className='WeatherForecast'>
<div className='row'>
  <div className='col'>
  <div className='WeatherForecast-day'>
   
      </div>
    <WeatherIcon code = {props.data.weather[0].icon} size={44}/> 

    <div className='WeatherForecast-temperature'>

      <span className='WeatherForecast-temperature-max'>
        {forecast[0].main.temp_max}</span>

      <span className='WeatherForecast-temperature-min'>
      {forecast[0].main.temp_min}</span>
      </div>
  </div>
 
</div>
    </div>
    ); 
 
} else {
      let apiKey = 'df04a6426eb8c9305ebb65c9deb52f35';
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?
lat=${latitude}&lon=${longitude}&cnt=4&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse); 

  return null; 
}
 }

