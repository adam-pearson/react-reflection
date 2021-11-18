import React from 'react';
import FiveDayCard from './FiveDayCard';
import ScrollContainer from 'react-indiana-drag-scroll'


const FiveDayCards = ({forecast, location}) => {
    return (
        <div className="forecast-cards-container">
            <ScrollContainer className="scroll-container" nativeMobileScroll={true}>
                <FiveDayCard forecast={forecast} location={location} day={0}/>
                <FiveDayCard forecast={forecast} location={location} day={1}/>
                <FiveDayCard forecast={forecast} location={location} day={2}/>
                <FiveDayCard forecast={forecast} location={location} day={3}/>
                <FiveDayCard forecast={forecast} location={location} day={4}/>
                <FiveDayCard forecast={forecast} location={location} day={5}/>
                <FiveDayCard forecast={forecast} location={location} day={6}/>
                <FiveDayCard forecast={forecast} location={location} day={7}/>
            </ScrollContainer>
        </div>
    );
}

export default FiveDayCards
