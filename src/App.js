import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Config from './config';
import axios from 'axios';


import Button from '@mui/material/Button';
// import { display } from '@mui/system';


let apiKey = Config.ACCUWEATHER_API_KEY;

function App() {

  const [userLocFromIp, setUserLocFromIp] = useState();
  const [displayLocation, setDisplayLocation] = useState();
  const [weatherAtLocation, setWeatherAtLocation] = useState();
  const [useMetric, setUseMetric] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({
    isDayTime: true,
    tempImp: 0,
    tempMet: 0,
    precipitation: false,
    precipitationType: null,
    weatherIcon: 0,
    weatherText: "",
  });
  const [fiveDayForecast, setFiveDayForecast] = useState();


  // Function to grab the user's IP address and use it to find their location
  const pullLocationFromIp = useCallback(() => {
    axios.get("https://geolocation-db.com/json")
    .then((response) => {
      return response.data.IPv4;
    })
    .catch ((err) => {
      let css = "font-weight: bold; font-size: 1rem";
      console.error("%c\nError fetching IP address for weather location.", css, "\nWe only use your IP address to find your local weather, and we serve no ads, so please consider disabling adblock for the best experience.", "\nDefaulting to Ashburn, Virginia");
    })
    .then((response) => {
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${response}&language=en-GB`)
    .then((response) => {
      setUserLocFromIp(response.data);
    })
    .catch ((err) => {
      console.log(err);
    })
    })
  }, []);

  const pullCurrentWeatherAtLocation = useCallback((locationKey) => {
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-GB`)
    .then((response) => {
      setWeatherAtLocation(response.data);
      setCurrentWeather(
        {
        isDayTime: response.data[0].IsDayTime,
        tempImp: response.data[0].Temperature.Imperial.Value,
        tempMet: response.data[0].Temperature.Metric.Value,
        precipitation: response.data[0].HasPrecipitation,
        precipitationType: response.data[0].PrecipitationType,
        weatherIcon: response.data[0].WeatherIcon,
        weatherText: response.data[0].WeatherText,
      });
    })
    .catch ((err) => {
      console.log(err)
    })
  }, []);


  // useEffect to pull user location and set the display location on first render
  useEffect(() => {
    if (!userLocFromIp) {
      pullLocationFromIp();
    }
      setDisplayLocation(userLocFromIp);
      
  }, [userLocFromIp, pullLocationFromIp])

  // useEffect to pull current weather at the current location
  useEffect(() => {
    if (displayLocation) {
      pullCurrentWeatherAtLocation(displayLocation.Key);
    }
  }, [displayLocation, pullCurrentWeatherAtLocation])


  console.log("Display location: ", displayLocation);
  console.log("Weather at location: ", weatherAtLocation);

// const returnedWeatherTemplate = [ 
//   {
//     "EpochTime": 1636544220,
//     "HasPrecipitation": false,
//     "IsDayTime": true,
//     "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/current-weather/329260?lang=en-gb",
//     "LocalObservationDateTime": "2021-11-10T11:37:00+00:00",
//     "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/current-weather/329260?lang=en-gb",
//     "PrecipitationType": null,
//     "Temperature":
//     {
//       "Imperial":
//       {
//         "Unit": "F",
//         "UnitType": 18,
//         "Value": 53,
//       },
//       "Metric":
//       {
//         "Unit": "C",
//         "UnitType": 17,
//         "Value": 11.5,
//       },
//     },
//     "WeatherIcon": 6,
//     "WeatherText": "Mostly cloudy",
//   }
// ]





  // Handle button click
  const clickHandler = () => {
    console.log("CLICKED!")
  }

  return (
    <div>
    <Button variant="contained" onClick={clickHandler}>
      Click me
    </Button>
    <ul>
      {weatherAtLocation ?
      <>
      <h1>{`Displaying weather for ${displayLocation.EnglishName}`}</h1>
      <h2>{`Current temperature: ${useMetric === true ? currentWeather.tempMet + " C": currentWeather.tempImp + " F"}`}</h2>
      <h2>Raining</h2>
       </>: "" }
    </ul>
    </div>
  );
}

export default App;
