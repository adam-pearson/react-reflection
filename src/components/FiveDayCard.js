import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

  

const FiveDayCard = ({forecast, location, day}) => {

    // if (forecast) {
    //   console.log("Forecast: ", forecast[day])
    //   console.log("Place name: ", location.EnglishName)
    //   console.log("Day: ", day)
    // }

    return (
        <div className="forecast card-container">

          {forecast ? 
            <Card className="forecast current-card">
            <CardHeader
                subheader={`${forecast[day].weatherText}.`}
                title={day === 0 ? "Today" : day === 1 ? "Tomorrow" : forecast[day].date.substr(0, 10)}
            />

            <CardContent className="forecast-content">
                <div className="weather-icon-container">
                  <div className="weather-icon">
                    {forecast[day].weatherText ? <img src={forecast[day].weatherIconFile} alt={`Icon showing the weather as ${forecast[day].weatherText}`}></img> : ""}
                  </div>
                  <div className="weather-info">
                    <Typography variant="h5" color="text.primary">
                        Max: {forecast[day].tempMax}°C
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                        Min: {forecast[day].tempMin}°C
                    </Typography>

                  </div>
                </div>
            </CardContent> 
            </Card>
          : "Waiting for data"
          }
        </div>
      );
}

export default FiveDayCard
