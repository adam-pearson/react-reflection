import { useState, useEffect, useCallback, createContext } from 'react';
import './styles/css/styles.css';
import {searchStringManchester, currentConditions, fiveDayForecastDummy} from './ExampleReturn';
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

// Toggle this to use dummy data
const useDummyData = false;


let apiKey = Config.ACCUWEATHER_API_KEY;

function App() {

  const [userLocFromIp, setUserLocFromIp] = useState();
  const [displayLocation, setDisplayLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState({
    recordedTime: "",
      isDayTime: false,
      temperature: {
          temp: null,
          realFeelTemp: null
      },
      wind: {
          direction: null,
          english: "",
          speed: null
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
  const [searchResults, setSearchResults] = useState();
  const [forecastPage, setForecastPage] = useState();
  // State and modifier for search box (passed through context)
  const [searchValue, setSearchValue] = useState("");


  // Set search results state on search submit
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!useDummyData) {
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchValue}&language=en-GB&details=true`)
      .then((response) => {
        setSearchResults(response.data);
        handleSearchOpen();
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    } else if (useDummyData) {
    const dummySearchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("FETCHING DUMMY SEARCH DATA"));
      }, 300);
    });
    dummySearchPromise
    .then((response) => {
      handleSearchOpen();
      setSearchResults(searchStringManchester);
    })
    .catch((err) => {
      console.log(err);
    });
  }
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
  const pullLocationFromIp = useCallback(() => {
    if (localStorage.getItem('IPLocation')) {
      console.log("Using location from local storage");
      const userLocationFromLocalStorage = JSON.parse(localStorage.getItem('IPLocation'));
      setUserLocFromIp(userLocationFromLocalStorage);
    } else {
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
    if (!useDummyData) {
      axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-GB&details=true`)
      .then ((response) => {
          setCurrentWeather({
            recordedTime: response.data[0].LocalObservationDateTime,
            isDayTime:response.data[0].IsDayTime,
            temperature: {
                temp: response.data[0].Temperature.Metric.Value,
                realFeelTemp: response.data[0].RealFeelTemperature.Metric.Value,
            },
            wind: {
                direction: response.data[0].Wind.Direction.Degrees,
                english: response.data[0].Wind.Direction.English,
                speed: response.data[0].Wind.Speed.Metric.Value,
            },
            precipitation: {
              precipitation: response.data[0].HasPrecipitation,
              precipitationType: response.data[0].PrecipitationType,
            },
            uvIndex: {
              index: response.data[0].UVIndex,
              indexText: response.data[0].UVIndexText
            },
            relativeHumidity: response.data[0].RelativeHumidity,
            weatherIcon: response.data[0].WeatherIcon,
            weatherIconFile: `/icons/${response.data[0].WeatherIcon}.png`,
            weatherText: response.data[0].WeatherText,
        })
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=en-GB&details=true&metric=true`)
        .then ((response) => {
          let fiveDayPre = [];
          for (let i = 0; i < response.data.DailyForecasts.length; i++) {
            fiveDayPre.push(
              {
                date: response.data.DailyForecasts[i].Date,
                sunrise: response.data.DailyForecasts[i].Sun.Rise,
                sunset: response.data.DailyForecasts[i].Sun.Set,
                tempMin: response.data.DailyForecasts[i].Temperature.Minimum.Value,
                tempMax: response.data.DailyForecasts[i].Temperature.Maximum.Value,
                weatherIcon: response.data.DailyForecasts[i].Day.Icon,
                weatherIconFile: `/icons/${response.data.DailyForecasts[i].Day.Icon}.png`,
                precipitation: {
                  precpitation: response.data.DailyForecasts[i].Day.HasPrecipitation,
                  precipitationType: response.data.DailyForecasts[i].Day.PrecipitationType,
                },
                weatherText: response.data.DailyForecasts[i].Day.LongPhrase,
              }
            )
          }
          setFiveDayForecast(fiveDayPre);
          fiveDayPre = [];
        })
        .catch ((err) => {
          console.log(err)
        });
      })
      .catch ((err) => {
        console.log(err)
      });
    } else if (useDummyData) {
      const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(console.log("FETCHING DUMMY WEATHER DATA"));
        }, 300);
      });
      dummyPromise
      .then ((response) => {
        setCurrentWeather({
          recordedTime: currentConditions[0].LocalObservationDateTime,
          isDayTime: currentConditions[0].IsDayTime,
          temperature: {
              temp: currentConditions[0].Temperature.Metric.Value,
              realFeelTemp: currentConditions[0].RealFeelTemperature.Metric.Value,
          },
          wind: {
              direction: currentConditions[0].Wind.Direction.Degrees,
              english: currentConditions[0].Wind.Direction.English,
              speed: currentConditions[0].Wind.Speed.Metric.Value,
          },
          precipitation: {
            precipitation: currentConditions[0].HasPrecipitation,
            precipitationType: currentConditions[0].PrecipitationType,
          },
          uvIndex: {
            index: currentConditions[0].UVIndex,
            indexText: currentConditions[0].UVIndexText
          },
          relativeHumidity: currentConditions[0].RelativeHumidity,
          weatherIcon: currentConditions[0].WeatherIcon,
          weatherIconFile: `/icons/${currentConditions[0].WeatherIcon}.png`,
          weatherText: currentConditions[0].WeatherText,
        });
      })
      .then ((response) => {
        let fiveDayPre = [];
        for (let i = 0; i < fiveDayForecastDummy.DailyForecasts.length; i++) {
          fiveDayPre.push(
            {
              date: fiveDayForecastDummy.DailyForecasts[i].Date,
              sunrise: fiveDayForecastDummy.DailyForecasts[i].Sun.Rise,
              sunset: fiveDayForecastDummy.DailyForecasts[i].Sun.Set,
              tempMin: fiveDayForecastDummy.DailyForecasts[i].Temperature.Minimum.Value,
              tempMax: fiveDayForecastDummy.DailyForecasts[i].Temperature.Maximum.Value,
              weatherIcon: fiveDayForecastDummy.DailyForecasts[i].Day.Icon,
              weatherIconFile: `/icons/${fiveDayForecastDummy.DailyForecasts[i].Day.Icon}.png`,
              precipitation: {
                precpitation: fiveDayForecastDummy.DailyForecasts[i].Day.HasPrecipitation,
                precipitationType: fiveDayForecastDummy.DailyForecasts[i].Day.PrecipitationType,
              },
              weatherText: fiveDayForecastDummy.DailyForecasts[i].Day.LongPhrase,
            }
          )
        }
        setFiveDayForecast(fiveDayPre);
        fiveDayPre = [];
      })
      .catch ((err) => {
        console.log(err)
      });
    }
  }, []);


  // pulling user location and set the display location on first render
  useEffect(() => {
    if (!userLocFromIp) {
      pullLocationFromIp();
    }
    setDisplayLocation(userLocFromIp);
      
  }, [userLocFromIp, pullLocationFromIp])


  // pulling current weather at display location if set
  useEffect(() => {
    if (displayLocation) {
      pullCurrentWeatherAtLocation(displayLocation.Key);
    }
  }, [displayLocation, pullCurrentWeatherAtLocation]);

  return (
    <div>
      <SearchContext.Provider value={{searchValue, setSearchValue, searchSubmitHandler}}>
        <SearchBoxContext.Provider value={{searchOpen, setDisplayLocation, setSearchOpen, handleSearchClose}}>
          <ThemeProvider theme={theme}>
            <Router>
              <AppMenu />
              <WeatherHeader weather={currentWeather} location={displayLocation} searchResults={searchResults}/>

              <Routes>
                <Route path="/" exact element={<CurrentCard weather={currentWeather} location={displayLocation} searchResults={searchResults} />} />
                <Route path="/forecast" exact element={<FiveDayCards forecast={fiveDayForecast} location={displayLocation} />} />
              </Routes>

              <div className="forecast-btn-container">
                <Button variant="contained" className="forecast-btn" component={Link} to={forecastPage ? "/" : "/forecast"} onClick={e => setForecastPage(!forecastPage)}>
                  {forecastPage 
                  ? "Current Weather"
                  : "Five Day Forecast"
                  }
                </Button>
              </div>
              </Router>
          </ThemeProvider>
        </SearchBoxContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
