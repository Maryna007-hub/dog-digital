import React from 'react'
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return days[day];
  }
  return (
    <div>
      <div className='WeatherForecast-day'>
        {day()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={44} />

      <div className='WeatherForecast-temperature'>

        <span className='WeatherForecast-temperature-max'>
          {Math.round(props.data.main.temp_max)}°</span>

        <span className='WeatherForecast-temperature-min'>
          {Math.round(props.data.main.temp_min)}°</span>
      </div>
    </div>

  )
}







/* function maxTemperature() {
     let temperature = Math.round(props.data.main.temp_max) 
return `${temperature}°`;
  }

  function minTemperature() {
      let temperature = Math.round(props.data.main.temp_min) 
return `${temperature}°`;
   } 

function day() {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();
  
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return days[day];
}

return (

)
}
*/
