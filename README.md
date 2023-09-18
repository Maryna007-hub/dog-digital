## 1. Project Structure creating:
- Create a new react-app project folder, 5 min
- HTML components (Bootstrap), import charts and icons, 14 min
- CSS styles, 15 min
- API Integration (using const), createWeather.js{ useState},  , 24 min
- Date, create FormattedDate.js with objects , 12 min
- Search Engine(search city) create WeatherInfo.js, 20 min
- React animated icons create WeatherIcon.js , 25min
- Change °C to °F,  create WeatherTemperature.js, 14 min
## 2. Forecast creating:
- Forecast layout, create WeatherForecast.js, css, 14min
- API forecast, create API call forecast coordinates(available only 3 hour API call), 14min
- Forecast 1 day, create WeatherForecastDay.js, function(props), change {forecast[0]} to {props.data}, 25min
- Forecast 5 days,  duplicate (div * 5), using index(0)+8(3 hour forecast API call available), 10min
##### api.openweathermap.org/data/2.5/forecast: - only available!
#### available only hourly forecast with array cnt=40(per 3 hours) and list[40] 
#### daily: forecasts - not available in api.openweathermap.org/data/2.5/onecall !!!!!
- Refresh Forecast 5 days, add useEffect to WeatherForecast.js, arrow-function to update if props has changed, 
