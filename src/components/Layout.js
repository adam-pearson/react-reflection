import React from 'react'
import AppMenu from './AppMenu';
import WeatherHeader from './WeatherHeader';

const Layout = ({currentWeather, displayLocation, searchResults}) => {
    return (
        <div>
            <AppMenu />
            <WeatherHeader weather={currentWeather} location={displayLocation} searchResults={searchResults}/>
        </div>
    )
}

export default Layout
