import { useState, useEffect, createContext } from 'react';
import './styles/css/styles.css';
// import * as Example from './ExampleReturn';
import Config from './config';
import axios from 'axios';
import AppMenu from './components/AppMenu';
import WeatherHeader from './components/WeatherHeader';
import CurrentCard from './components/CurrentCard';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import FiveDayCards from './components/FiveDayCards';


let theme = createTheme();
theme = responsiveFontSizes(theme);

export const SearchContext = createContext();
export const SearchBoxContext = createContext();

let apiKey = Config.OPENWEATHERMAP_API_KEY;


function App() {

  const [searchResults, setSearchResults] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [geoDeclined, setGeoDeclined] = useState(false);
  // Tracks if the current page is the forecast page or not
  const [forecastPage, setForecastPage] = useState(false);
  // State and modifier for search box (passed through context)
  const [searchValue, setSearchValue] = useState("");

  // Set search results state on search submit
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=10&appid=${apiKey}`)
    .then((response) => {
      setSearchResults(response.data);
      handleSearchOpen();
      // console.log(response.data);
    })
    .catch((err) => {
      setSearchResults({error: true, errorMessage: err, message: "No results found for that search term"});
      handleSearchOpen();
    });
  };

  // Handlers for opening and closing the search dialogue
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  // On component mount, attempt to pull geolocation data from user's device
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, declinedPosition);
    } else {
      console.error("Geolocation is not supported on this device");
    }
  }, []);

  
  // Pull weather at a given location using coordinates
  const getWeatherAtLocation = (lat, lon) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=minutely,alerts`)
    .then (response => {
      setWeather(response.data)
      // console.log("Response from one call request: ", response.data);
    })
    .catch (err => {
      console.log("Error from weather request: ", err);
    });
  };

  // Update the weather every time the location state is updated
  useEffect(() => {
    if (location) {
      getWeatherAtLocation(location.lat, location.lon);
      // console.log(location.lat, location.lon)
    }
  }, [location]);

  // Set location to default coordinates (Manchester) if geolocation is unavailable or declined, and
  // then pull current weather for that location
  const declinedPosition = () => {
    setGeoDeclined(true);
    let lat = 53.4808;
    let lon = -2.2426;
    axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${apiKey}`)
      .then (response => {
        setLocation(response.data[0]);
        // console.log("Setting default location: ", response);
        getWeatherAtLocation(lat, lon);
      })
      .catch (err => {
        console.log("Error getting default location: ", err);
      })
  }

  // Function to set the user's location through their device's geolocation
  const setPosition = (position) => {
    // console.log("Latitude: ", position.coords.latitude);
    // console.log("Longitude: ", position.coords.longitude);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${apiKey}`)
      .then (response => {
        setLocation(response.data[0]);
        console.log("Location from co-ordinates: ", response);
      })
      .catch (err => {
        // console.log("Error getting location: ", err);
      })
  };

  return (
    <div>
      <SearchContext.Provider value={{searchValue, setSearchValue, searchSubmitHandler}}>
        <SearchBoxContext.Provider value={{searchOpen, setLocation, setSearchOpen, handleSearchClose}}>
          <ThemeProvider theme={theme}>
            <Router>
              <AppMenu setPosition={setPosition} geoDeclined={geoDeclined}/>
              <WeatherHeader weather={weather} location={location} searchResults={searchResults} forecastPage={forecastPage} setForecastPage={setForecastPage}/>

              <Routes>
                <Route path="/" exact element={<CurrentCard weather={weather} location={location} searchResults={searchResults}/>} />
                <Route path="/forecast" exact element={<FiveDayCards forecast={weather && weather.daily} location={location}/>} />
                <Route element={<CurrentCard weather={weather} location={location} searchResults={searchResults}/>} />
              </Routes>

              </Router>
          </ThemeProvider>
        </SearchBoxContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
