import { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';


import Button from '@mui/material/Button';
// import { display } from '@mui/system';


function App() {

  const [userLocFromIp, setUserLocFromIp] = useState();
  const [displayLocation, setDisplayLocation] = useState();
  const [weatherAtLocation, setWeatherAtLocation] = useState();


  // Function to grab the user's IP address
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
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=8IkAMu7Km3GRRYAkhKSYD7ljbFl4Urfo&q=${response}&language=en-GB`)
    .then((response) => {
      setUserLocFromIp(response.data);
    })
    .catch ((err) => {
      console.log(err);
    })
    })
  }, []);

  const pullCurrentWeatherAtLocation = useCallback((locationKey) => {
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=8IkAMu7Km3GRRYAkhKSYD7ljbFl4Urfo&language=en-GB`)
    .then((response) => {
      setWeatherAtLocation(response.data);
    })
    .catch ((err) => {
      console.log(err)
    })
  }, []);


  useEffect(() => {
    if (!userLocFromIp) {
      pullLocationFromIp();
    }
      setDisplayLocation(userLocFromIp);
      
  }, [userLocFromIp, pullLocationFromIp])

  useEffect(() => {
    if (displayLocation) {
      pullCurrentWeatherAtLocation(displayLocation.Key);
    }
  }, [displayLocation, pullCurrentWeatherAtLocation])

  // useEffect(() => {
  //     console.log("User loc from IP: ", userLocFromIp);
  //     console.log("Display location: ", displayLocation);
  //     console.log("Weather at location: ", weatherAtLocation);
  // }, [userLocFromIp, displayLocation, weatherAtLocation]);



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
      {weatherAtLocation ? <h1>{`The temperature in ${displayLocation.EnglishName} is ${weatherAtLocation[0].Temperature.Metric.Value} ${weatherAtLocation[0].Temperature.Metric.Unit}`}</h1> : "" }
    </ul>
    </div>
  );
}

export default App;
