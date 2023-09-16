import React , { useState } from 'react';
import WeatherForecast from './WeatherForecast';
import './Weather.css';
import {
    UilLocationPoint
  } from '@iconscout/react-unicons';
  import axios from 'axios';
 import  WeatherInfo  from "./WeatherInfo";

 export default function Weather(props) {
    const [weatherData, setWeatherData ] = useState({ ready: false });
 const [city, setCity] = useState(props.defaultCity);

 function handleResponse(response) {
   // console.log(response.data);

setWeatherData({
    ready: true,
    coordinates: response.data.coord,
  temperature: response.data.main.temp, 
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
  icon: response.data.weather[0].icon,
  description: response.data.weather[0].description,
  city: response.data.name,
  date: new Date(response.data.dt * 1000)
})
  }

function search() {
    const apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);   
}

 function handleSubmit(event) {
    event.preventDefault();
   search();
}

function handleCityChange(event) {
    setCity(event.target.value);  
}

if (weatherData.ready) {
 return (
    <div className='Weather'>
          <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-6">
            <input type="search" placeholder="Search a city" className="form-control" 
            autoComplete="off" autoFocus='on' onChange={handleCityChange}/>
          </div>

          <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>

          <div className="col-3">
           <button className="btn btn-primary w-100" autoFocus='on' >
            Current <UilLocationPoint size={18}/></button> 
          </div>

        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <div className='row'>
      <div className='col'>
        <hr/>
      </div>
     </div>
     <WeatherForecast coordinates={weatherData.coordinates}/>
     
  </div>
)
} else {
  search();
    return 'Loading...';
}
}
        
       
      
      
  