import SearchResults from './SearchResults';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


const WeatherHeader = ({weather, location, searchResults, forecastPage, setForecastPage}) => {

    const currentWeatherImage = (weather) => {
        const icon = weather.current.weather[0].icon;
        switch (icon) {
            case "01d":
                return "clear";
            case "01n":
                return "clear-night";
            case "02d":
            case "03d":
            case "04d":
            case "02n":
            case "03n":
            case "04n":
                return "cloudy";
            case "09d":
            case "10d":
                return "rainy";
            case "09n":
            case "10n":
                return "rainy-night";
            case "11d":
                return "lightning";
            case "11n":
                return "lightning-night";
            case "13d": 
                return "snowy";
            case "13n": 
                return "snowy-night";
            case "50d":
                return "foggy";
            case "50n":
                return "foggy-night";
            default:
                return "clear";
        }
    }

    return (
        <div className={`background-image ${weather && currentWeatherImage(weather)}`}>
            <SearchResults searchResults={searchResults}/>
            <Typography variant="h2" className="place-name">
                {location ? location.name : <Skeleton variant="text" width={275} height={100} />}
            </Typography>
            <Typography variant="h6" component="span" className="place-name">
                {location ? `(${Math.abs(location.lat)} °${location.lat >= 0? "N" : "S"}, ${Math.abs(location.lon)} °${location.lon >= 0 ? "E" : "W"})` : <Skeleton variant="text" width={138} height={32} />}
            </Typography>
            {weather &&
            <div className="forecast-btn-container">
                <Button variant="contained" className="forecast-btn" component={Link} to={forecastPage ? "/" : "/forecast"} onClick={e => setForecastPage(!forecastPage)}>
                  {forecastPage 
                  ? "Current Weather"
                  : "Five Day Forecast"
                  }
                </Button>
              </div>
            }
        </div>
    )
}

export default WeatherHeader
