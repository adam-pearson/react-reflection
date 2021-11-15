import React from 'react';
import FiveDayCard from './FiveDayCard';

const FiveDayCards = ({forecast, location}) => {
    return (
        <div className="forecast-cards-container">
            <FiveDayCard forecast={forecast} location={location} day={0}/>
            <FiveDayCard forecast={forecast} location={location} day={1}/>
            <FiveDayCard forecast={forecast} location={location} day={2}/>
            <FiveDayCard forecast={forecast} location={location} day={3}/>
            <FiveDayCard forecast={forecast} location={location} day={4}/>
        </div>
    );
}

export default FiveDayCards
