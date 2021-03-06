import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import {MetricContext} from '../App';


const FiveDayCard = ({forecast, location, day}) => {

  const metricContext = React.useContext(MetricContext);


  function createData(name,value) {
    return { name, value };
  }
  
  // const rows = [
  //   createData('Precipitation', forecast ? `${(forecast[day].pop * 100).toFixed(0)}%` : "N/A"),
  //   createData('Wind Speed', forecast ? `${forecast[day].wind_speed.toFixed(1)} km/h` : "N/A"),
  //   createData('Wind Direction', forecast ? `${forecast[day].wind_deg}°` : "N/A"),
  //   createData('Humidity', forecast ? `${forecast[day].humidity}%`: "N/A"),
  //   createData('UV Index', forecast ? `${forecast[day].uvi}` : "N/A"),
  // ];


  const rows = [
    createData(
      'Precipitation',
      forecast ? `${(forecast[day].pop * 100).toFixed(0)}%` : "N/A"
    ),
    createData(
      'Wind Speed',
      forecast ? metricContext.useMetric ? `${forecast[day].wind_speed.toFixed(1)} km/h` : `${(forecast[day].wind_speed / 1.609).toFixed(1)} mph` : "N/A"
    ),
    createData(
      'Wind Direction', forecast ? `${forecast[day].wind_deg}°` : "N/A"
    ),
    createData(
      'Humidity',
      forecast ? `${forecast[day].humidity}%`: "N/A"
    ),
    createData(
      'UV Index',
      forecast ? `${forecast[day].uvi}` : "N/A"
    ),
  ];


  let dayOfWeek = "";

  if (forecast) {
    let dateString = new Date(forecast[day].dt * 1000);
    dayOfWeek = dateString.toLocaleDateString("en-us", { weekday: 'long' }); 
  } else {
    dayOfWeek = "";
  }

const capitalise = (str) => {
  return str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')
};

    return (
        <div className="forecast card-container">

            <Card className="forecast current-card">
            <CardHeader
                subheader={forecast ? `${capitalise(forecast[day].weather[0].description)}.` : <Skeleton variant="text" height={32} />}
                title={forecast ? day === 0 ? `Today` : day === 1 ? `Tomorrow` : day === 7 ? `Next ${dayOfWeek}` : dayOfWeek : <Skeleton variant="text" height={32} />}
            />

            <CardContent className="forecast-content">
                <div className="weather-icon-container">
                  <div className="weather-icon">
                    {forecast ? <img className="weather-icon-svg" src={`/icons/${forecast[day].weather[0].icon}.svg`} alt={`Icon showing the weather as ${forecast[day].weather[0].description}`}></img> : <Skeleton variant="circular" width={50} height={50} />}
                  </div>
                  <div className="weather-info">
                  {forecast ? 
                    <Typography className="forecast-temp" classcolor="text.primary">
                        <span className="minmax">Max:</span> {metricContext.useMetric ? `${forecast[day].temp.max.toFixed(1)}°C` : `${((forecast[day].temp.max * 9/5) + 32).toFixed(1)}°F`}
                    </Typography>
                    : <Skeleton variant="text" height={32} />
                  }
                  {forecast ? 
                    <Typography className="forecast-temp" color="text.primary">
                      <span className="minmax">Min:</span> {metricContext.useMetric ? `${forecast[day].temp.min.toFixed(1)}°C` : `${((forecast[day].temp.min * 9/5) + 32).toFixed(1)}°F`}
                    </Typography>
                    : <Skeleton variant="text" height={32} />
                  }
                  </div>
                </div>
            </CardContent> 
            {forecast &&
              <CardContent>
                <TableContainer>
                  <Table className="current-more" aria-label="simple table">
                      <TableBody>
                      {rows.map((row) => (
                          <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                          <TableCell component="th" scope="row">
                              {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            }
            </Card>
        </div>
      );
}

export default FiveDayCard
