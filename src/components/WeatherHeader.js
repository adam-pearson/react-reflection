import SearchResults from './SearchResults';
import Typography from '@mui/material/Typography';

const WeatherHeader = ({weather, location, searchResults}) => {

    const currentWeatherImage = () => {
        const icon = weather.weatherIcon;
        if (icon > 0 && icon < 5) {
            return "clear";
        } else if (icon > 32 && icon < 37) {
            return "clear-night";
        } else if ((icon > 4 && icon < 12 ) || (icon > 36 && icon < 39)) {
            return "cloudy"
        } else if ((icon > 11 && icon < 15 ) || (icon > 38 && icon < 41) || (icon === 18)) {
            return "rainy"
        } else if (icon > 38 && icon < 41) {
            return "rainy-night"
        } else if ((icon > 14 && icon < 18 ) || (icon > 40 && icon < 43)) {
            return "lightning"
        } else if (icon > 40 && icon < 43) {
            return "lightning-night"
        } else if (icon > 42 && icon < 45) {
            return "snowy"
        } else if ((icon > 18 && icon < 24 ) || (icon > 42 && icon < 45)) {
            return "snowy-night"
        } else if (icon > 23 && icon < 30 ) {
            return "icy"
        }
    }

    return (
        <div className={`background-image ${currentWeatherImage()}`}>
            <SearchResults searchResults={searchResults}/>
            <Typography variant="h2" className="place-name">
                {weather.weatherText && location.EnglishName}
            </Typography>
            {/* <CurrentCard weather={weather} location={location} /> */}
        </div>
    )
}

export default WeatherHeader
