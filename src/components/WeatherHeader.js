import React from 'react'
import CurrentCard from './CurrentCard'
import SearchResults from './SearchResults';

const WeatherHeader = ({weather, location, searchResults}) => {

    const currentWeatherImage = () => {
        const icon = weather.weatherIcon;
        if ((icon > 0 && icon < 5) || (icon > 32 && icon < 37)) {
            return "sunny";
        } else if ((icon > 4 && icon < 12 ) || (icon > 36 && icon < 39)) {
            return "cloudy"
        } else if ((icon > 11 && icon < 15 ) || (icon > 38 && icon < 41) || (icon === 18)) {
            return "rainy"
        } else if ((icon > 14 && icon < 18 ) || (icon > 40 && icon < 43)) {
            return "lightning"
        } else if ((icon > 18 && icon < 24 ) || (icon > 42 && icon < 45)) {
            return "snowy"
        } else if (icon > 23 && icon < 30 ) {
            return "icy"
        }
    }

    return (
        <div className={`background-image ${currentWeatherImage()}`}>
            <SearchResults searchResults={searchResults}/>
            <CurrentCard weather={weather} location={location} />
        </div>
    )
}

export default WeatherHeader
