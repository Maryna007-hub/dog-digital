import React from 'react'
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {
function handleResponse(response) {
  console.log(response.data);
}
// console.log(props)
  let apiKey = 'df04a6426eb8c9305ebb65c9deb52f35';
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?
lat=${latitude}&lon=${longitude}&cnt=5&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse); 

  return (
    <div className='WeatherForecast'>
<div className='row'>
  <div className='col'>
    <div className='WeatherForecast-day'>
      Mon 
      </div>
    <WeatherIcon code ='01d' size={44}/> 
    <div className='WeatherForecast-temperature'>
      <span className='WeatherForecast-temperature-max'>20°</span>
      <span className='WeatherForecast-temperature-min'>14°</span>
      </div>
  </div>
</div>
    </div>
  );
    
  
}

