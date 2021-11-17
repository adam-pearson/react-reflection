import { useState, useEffect, useCallback, createContext } from 'react';
import './styles/css/styles.css';
import * as Example from './ExampleReturn';
import Config from './config';
import axios from 'axios';
import AppMenu from './components/AppMenu';
import WeatherHeader from './components/WeatherHeader';
import CurrentCard from './components/CurrentCard';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import FiveDayCards from './components/FiveDayCards';
import Button from '@mui/material/Button';


let theme = createTheme();
theme = responsiveFontSizes(theme);

export const SearchContext = createContext();
export const SearchBoxContext = createContext();

let apiKey = Config.OPENWEATHERMAP_API_KEY;


function App() {

  const [searchResults, setSearchResults] = useState();

  // State and modifier for search box (passed through context)
  const [searchValue, setSearchValue] = useState("");


  // Set search results state on search submit
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchValue}&language=en-GB&details=true`)
    .then((response) => {
      setSearchResults(response.data);
      handleSearchOpen();
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

  const [searchOpen, setSearchOpen] = useState(false);
  
    const handleSearchOpen = () => {
      setSearchOpen(true);
    };
    const handleSearchClose = () => {
      setSearchOpen(false);
    };




  /**
   *  First checks if the user's IP location is set in local storage
   *  If TRUE, sets the user location from IP state to this location
   *  If FALSE, pulls the user's IP and finds their location from accuweather
   */
  // const pullLocationFromIp = useCallback(() => {
  //   if (localStorage.getItem('IPLocation')) {
  //     console.log("Using location from local storage");
  //     const userLocationFromLocalStorage = JSON.parse(localStorage.getItem('IPLocation'));
  //     setUserLocFromIp(userLocationFromLocalStorage);
  //   } else {
  //     console.log("No location found in local storage");
  //     axios.get("https://geolocation-db.com/json/de711330-3dff-11ec-a9a6-8f668cb904bf")
  //     .then((response) => {
  //       console.log("IPv4: ", response.data.IPv4);
  //       return response.data.IPv4;
  //     })
  //     .catch ((err) => {
  //       let css = "font-weight: bold; font-size: 1rem";
  //       console.error("%c\nError fetching IP address for weather location.", css, "\nWe only use your IP address to find your local weather, and we serve no ads, so please consider disabling adblock for the best experience.", "\nDefaulting to Ashburn, Virginia");
  //       setUserLocFromIp(searchByIp);
  //       localStorage.setItem('IPLocation', JSON.stringify(searchByIp));
  //     })
  //     .then((response) => {
  //       axios.get(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${response}&language=en-GB`)
  //       .then((response) => {
  //         console.log("Response", response);
  //         setUserLocFromIp(response.data);
  //         localStorage.setItem('IPLocation', JSON.stringify(response.data));
  //       })
  //       .catch ((err) => {
  //         console.log(err);
  //       })
  //     })
  //   }
  // }, []);




  // const pullCurrentWeatherAtLocation = useCallback((locationKey) => {
  //   axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-GB&details=true`)
  //   .then ((response) => {
  //       setCurrentWeather({
  //         recordedTime: response.data[0].LocalObservationDateTime,
  //         isDayTime:response.data[0].IsDayTime,
  //         temperature: {
  //             temp: response.data[0].Temperature.Metric.Value,
  //             realFeelTemp: response.data[0].RealFeelTemperature.Metric.Value,
  //         },
  //         wind: {
  //             direction: response.data[0].Wind.Direction.Degrees,
  //             english: response.data[0].Wind.Direction.English,
  //             speed: response.data[0].Wind.Speed.Metric.Value,
  //         },
  //         precipitation: {
  //           precipitation: response.data[0].HasPrecipitation,
  //           precipitationType: response.data[0].PrecipitationType,
  //         },
  //         uvIndex: {
  //           index: response.data[0].UVIndex,
  //           indexText: response.data[0].UVIndexText
  //         },
  //         relativeHumidity: response.data[0].RelativeHumidity,
  //         weatherIcon: response.data[0].WeatherIcon,
  //         weatherIconFile: `/icons/${response.data[0].WeatherIcon}.png`,
  //         weatherText: response.data[0].WeatherText,
  //     })
  //     axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=en-GB&details=true&metric=true`)
  //     .then ((response) => {
  //       let fiveDayPre = [];
  //       for (let i = 0; i < response.data.DailyForecasts.length; i++) {
  //         fiveDayPre.push(
  //           {
  //             date: response.data.DailyForecasts[i].Date,
  //             sunrise: response.data.DailyForecasts[i].Sun.Rise,
  //             sunset: response.data.DailyForecasts[i].Sun.Set,
  //             tempMin: response.data.DailyForecasts[i].Temperature.Minimum.Value,
  //             tempMax: response.data.DailyForecasts[i].Temperature.Maximum.Value,
  //             weatherIcon: response.data.DailyForecasts[i].Day.Icon,
  //             weatherIconFile: `/icons/${response.data.DailyForecasts[i].Day.Icon}.png`,
  //             precipitation: {
  //               precpitation: response.data.DailyForecasts[i].Day.HasPrecipitation,
  //               precipitationType: response.data.DailyForecasts[i].Day.PrecipitationType,
  //             },
  //             weatherText: response.data.DailyForecasts[i].Day.LongPhrase,
  //           }
  //         )
  //       }
  //       setFiveDayForecast(fiveDayPre);
  //       fiveDayPre = [];
  //     })
  //     .catch ((err) => {
  //       console.log(err)
  //     });
  //   })
  //   .catch ((err) => {
  //     console.log(err)
  //   });
  // }, []);


  // pulling user location and set the display location on first render
  // useEffect(() => {
  //   if (!userLocFromIp) {
  //     pullLocationFromIp();
  //   }
  //   setDisplayLocation(userLocFromIp);
      
  // }, [userLocFromIp, pullLocationFromIp])


  // pulling current weather at display location if set
  // useEffect(() => {
  //   if (displayLocation) {
  //     pullCurrentWeatherAtLocation(displayLocation.Key);
  //   }
  // }, [displayLocation, pullCurrentWeatherAtLocation]);

  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, declinedPosition);
    } else {
      console.log("Geolocation is not supported on this device");
    }
  };

  const declinedPosition = () => {
    let lat = 53.4808;
    let lon = -2.2426;
    axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${apiKey}`)
      .then (response => {
        setLocation(response.data[0]);
        console.log("Setting default location: ", response);

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=minutely,hourly,alerts`)
        .then (response => {
          setWeather(response.data)
          console.log("Response from one call request: ", response.data);
        })
        .catch (err => {
          console.log("Error from one call request: ", err);
        });

      })
      .catch (err => {
        console.log("Error getting default location: ", err);
      })
  }

  const setPosition = (position) => {
    console.log("Latitude: ", position.coords.latitude);
    console.log("Longitude: ", position.coords.longitude);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${apiKey}`)
      .then (response => {
        setLocation(response.data[0]);
        console.log("Location from co-ordinates: ", response);
        
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=minutely,hourly,alerts`)
        .then (response => {
          setWeather(response.data)
          console.log("Response from one call request: ", response.data);
        })
        .catch (err => {
          console.log("Error from one call request: ", err);
        });

      })
      .catch (err => {
        console.log("Error getting location: ", err);
      })

  };



  return (
    <div>
      <SearchContext.Provider value={{searchValue, setSearchValue, searchSubmitHandler}}>
        <SearchBoxContext.Provider value={{searchOpen, setLocation, setSearchOpen, handleSearchClose}}>
          <ThemeProvider theme={theme}>
            <Router>
              <AppMenu />
              <WeatherHeader weather={weather} location={location} searchResults={searchResults}/>

              <Routes>
                <Route path="/" exact element={<CurrentCard weather={weather} location={location} searchResults={searchResults} />} />
                {/* <Route path="/forecast" exact element={<FiveDayCards forecast={weather} location={displayLocation} />} /> */}
              </Routes>

              {/* <div className="forecast-btn-container">
                <Button variant="contained" className="forecast-btn" component={Link} to={forecastPage ? "/" : "/forecast"} onClick={e => setForecastPage(!forecastPage)}>
                  {forecastPage 
                  ? "Current Weather"
                  : "Five Day Forecast"
                  }
                </Button>
              </div> */}
              </Router>
          </ThemeProvider>
        </SearchBoxContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
