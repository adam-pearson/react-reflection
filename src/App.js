import { useState, useEffect, useCallback } from 'react';
import './styles/css/styles.css';
import exampleData from './ExampleReturn.json';
import Config from './config';
import axios from 'axios';

import AppMenu from './components/AppMenu';
import WeatherBackground from './components/WeatherBackground';
import CurrentCard from './components/CurrentCard';





let apiKey = Config.ACCUWEATHER_API_KEY;

function App() {

  const [userLocFromIp, setUserLocFromIp] = useState();
  const [displayLocation, setDisplayLocation] = useState();
  const [useMetric, setUseMetric] = useState(true);
  const [lastRequestEpoch, setLastRequestEpoch] = useState();
  const [pulledWeather, setPulledWeather] = useState({})
  const [currentWeather, setCurrentWeather] = useState({
    recordedTime: "",
      isDayTime: false,
      temperature: {
          tempImp: null,
          tempMet: null,
          realFeelTempImp: null,
          realFeelTempMet: null
      },
      wind: {
          direction: null,
          english: "",
          speedImp: null,
          speedMet: null
      },
      precipitation: {
        precipitation: false,
        precipitationType: ""
      },
      uvIndex: {
        index: null,
        indexText: ""
      },
      relativeHumidity: null,
      weatherIcon: null,
      weatherIconFile: "",
      weatherText: ""
  });
  const [fiveDayForecast, setFiveDayForecast] = useState();


  /**
   *  First checks if the user's IP location is set in local storage
   *  If TRUE, sets the user location from IP state to this location
   *  If FALSE, pulls the user's IP and finds their location from accuweather
   */
  const pullLocationFromIp = useCallback(() => {

    if (localStorage.getItem('IPLocation')) {
      console.log("Using location from local storage");
      const userLocationFromLocalStorage = JSON.parse(localStorage.getItem('IPLocation'));
      setUserLocFromIp(userLocationFromLocalStorage);
    } 
    else
    {
      console.log("No location found in local storage");
      axios.get("https://geolocation-db.com/json")
      .then((response) => {
        console.log("IPv4: ", response.data.IPv4);
        return response.data.IPv4;
      })
      .catch ((err) => {
        let css = "font-weight: bold; font-size: 1rem";
        console.error("%c\nError fetching IP address for weather location.", css, "\nWe only use your IP address to find your local weather, and we serve no ads, so please consider disabling adblock for the best experience.", "\nDefaulting to Ashburn, Virginia");
      })
      .then((response) => {
        console.log("IP response: ", response)
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${response}&language=en-GB`)
        .then((response) => {
          console.log("Response", response);
          setUserLocFromIp(response.data);
          localStorage.setItem('IPLocation', JSON.stringify(response.data));
        })
        .catch ((err) => {
          console.log(err);
        })
      })
    }
  }, []);

  const pullCurrentWeatherAtLocation = useCallback((locationKey) => {
    const dummyPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("FETCHING DUMMY DATA"));
      }, 300);
    });
    
    // UNCOMMENT THIS FOR LIVE CURRENT WEATHER DATA
    // axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-GB&details=true`)
    // .then((response) => {
    //   setLastRequestEpoch(response.data.EpochTime);
    //   setPulledWeather(response.data);
    //   setCurrentWeather({
    //     recordedTime: response.data[0].LocalObservationDateTime,
    //     isDayTime:response.data[0].IsDayTime,
    //     temperature: {
    //         tempImp: response.data[0].Temperature.Imperial.Value,
    //         tempMet: response.data[0].Temperature.Metric.Value,
    //         realFeelTempImp: response.data[0].RealFeelTemperature.Imperial.Value,
    //         realFeelTempMet: response.data[0].RealFeelTemperature.Metric.Value,
    //     },
    //     wind: {
    //         direction: response.data[0].Wind.Direction.Degrees,
    //         english: response.data[0].Wind.Direction.English,
    //         speedImp: response.data[0].Wind.Speed.Imperial.Value,
    //         speedMet: response.data[0].Wind.Speed.Metric.Value,
    //     },
    //     precipitation: {
    //       precipitation: response.data[0].HasPrecipitation,
    //       precipitationType: response.data[0].PrecipitationType,
    //     },
    //     uvIndex: {
    //       index: response.data[0].UVIndex,
    //       indexText: response.data[0].UVIndexText
    //     },
    //     relativeHumidity: response.data[0].RelativeHumidity,
    //     weatherIcon: response.data[0].WeatherIcon,
    //     weatherIconFile: `/icons/${response.data[0].WeatherIcon}.png`,
    //     weatherText: response.data[0].WeatherText,
    // });

      // add 5 day forecast setter here
    // })

    // COMMENT THIS OUT FOR REAL DATA
    dummyPromise
    .then((response) => {
      setLastRequestEpoch(exampleData);
      setCurrentWeather({
        recordedTime: exampleData[0].LocalObservationDateTime,
        isDayTime: exampleData[0].IsDayTime,
        temperature: {
            tempImp: exampleData[0].Temperature.Imperial.Value,
            tempMet: exampleData[0].Temperature.Metric.Value,
            realFeelTempImp: exampleData[0].RealFeelTemperature.Imperial.Value,
            realFeelTempMet: exampleData[0].RealFeelTemperature.Metric.Value,
        },
        wind: {
            direction: exampleData[0].Wind.Direction.Degrees,
            english: exampleData[0].Wind.Direction.English,
            speedImp: exampleData[0].Wind.Speed.Imperial.Value,
            speedMet: exampleData[0].Wind.Speed.Metric.Value,
        },
        precipitation: {
          precipitation: exampleData[0].HasPrecipitation,
          precipitationType: exampleData[0].PrecipitationType,
        },
        uvIndex: {
          index: exampleData[0].UVIndex,
          indexText: exampleData[0].UVIndexText
        },
        relativeHumidity: exampleData[0].RelativeHumidity,
        weatherIcon: exampleData[0].WeatherIcon,
        weatherIconFile: `/icons/${exampleData[0].WeatherIcon}.png`,
        weatherText: exampleData[0].WeatherText,
      });

    })
    .catch ((err) => {
      console.log(err)
    })
  }, []);


  // pulling user location and set the display location on first render
  useEffect(() => {
    if (!userLocFromIp) {
      pullLocationFromIp();
    }
    setDisplayLocation(userLocFromIp);
      
  }, [userLocFromIp, pullLocationFromIp])


  // pulling current weather at display location
  useEffect(() => {
    if (displayLocation) {
      pullCurrentWeatherAtLocation(displayLocation.Key);
    }
  }, [displayLocation, pullCurrentWeatherAtLocation]);



  console.log("Display location: ", displayLocation);
  console.log("Pulled weather: ", pulledWeather);
  console.log("Current weather: ", currentWeather);


  return (
    <div>
      {/* <AppMenu /> */}
      <WeatherBackground weather={currentWeather} />
      <CurrentCard weather={currentWeather} useMetric={useMetric} location={displayLocation} />
    




    </div>
  );
}

export default App;
