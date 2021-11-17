import SearchResults from './SearchResults';
import Typography from '@mui/material/Typography';

const WeatherHeader = ({weather, location, searchResults}) => {

    const currentWeatherImage = (weather) => {
        const icon = weather.current.weather[0].icon;
        console.log(weather.current.weather[0].icon);
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
                {location && location.name}
            </Typography>
        </div>
    )
}

export default WeatherHeader
