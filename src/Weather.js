import React from 'react'

import './Weather.css';
import {
    UilTear,
    UilWind,
  } from '@iconscout/react-unicons';

 export default function Weather() {
  return (
    <div className='Weather'>
          <form>
        <div class="row">
          <div class="col-9">
            <input type="search" placeholder="Search a city" class="form-control" autocomplete="off"/>
          </div>
          <div class="col-3">
           <input type="submit" value="Search" class="btn btn-primary" />
          </div>
        </div>
      </form>
        <h1>London</h1> 
   <ul>
    <li>Friday 20:23</li>
    <li>Cloudy</li>
   </ul>
   <div class="row">
  <div class="col-6">
  <img src="https://openweathermap.org/img/wn/01n@2x.png" alt="clear"/>
  18°
    </div>
    <div class="col-6">
    <ul>
        <li>
        <UilTear size={19} className='tear'/>  Humidity: 23%
        </li>
        <li>
        <UilWind size={19} className='wind'/>  Wind: 12 km/h
        </li>
    </ul>
    </div>
  </div>
  </div>
)
}