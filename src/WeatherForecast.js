import React, { useState, useEffect } from 'react'
// import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';
// import { cleanup } from '@testing-library/react';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
 setLoaded(false);
},
[props.coordinates]);
// if the coordinates change set loaded false

function handleResponse(response) {
    //  console.log(response.data);
  setForecast(response.data.list);
  setLoaded(true);
 }

 function load() {
  let apiKey = 'df04a6426eb8c9305ebb65c9deb52f35';
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?
lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse); 
 }
//  console.log(props)

if (loaded) {
// console.log(forecast);
   return (
   <div className='WeatherForecast'>
<div className='row'>
  <div className='col'>
  <WeatherForecastDay data={forecast[1]}/>   
  </div>
  <div className='col'>
  <WeatherForecastDay data={forecast[9]}/>   
  </div>
  <div className='col'>
  <WeatherForecastDay data={forecast[17]}/>   
  </div>
  <div className='col'>
  <WeatherForecastDay data={forecast[25]}/>   
  </div>
  <div className='col'>
  <WeatherForecastDay data={forecast[33]}/>   
  </div> 

</div>
    </div>
    ); 
 
} else {
load();
 return null; 
}
 }

