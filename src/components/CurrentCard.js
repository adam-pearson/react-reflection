import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const capitalise = (str) => {
  return str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function CurrentCard({weather, location}) {
  const [expanded, setExpanded] = React.useState(false);

  function createData(name,value) {
    return { name, value };
  }
  
  const rows = [
    createData('Precipitation', weather ? `${weather.daily[0].pop * 100}%` : "N/A"),
    createData('Wind Speed', weather ? `${weather.current.wind_speed} km/h` : "N/A"),
    createData('Wind Direction', weather ? `${weather.current.wind_deg}°` : "N/A"),
    createData('Humidity', weather ? `${weather.current.humidity}%`: "N/A"),
    createData('UV Index', weather ? `${weather.current.uvi}` : "N/A"),
  ];

  let time = "";

  if (weather) {
    let dateString = new Date(weather.current.dt * 1000);
    let utcString = dateString.toUTCString();
    time = utcString.slice(-12, -4);
  } else {
    time = "";
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
        <Card className="current-card">
        <CardHeader
            title={weather ? capitalise(weather.current.weather[0].description) : " "}
            subheader={time}
        />
        <CardContent>
            <div className="weather-icon-container">
              <div className="weather-icon">
                {weather ? <img src={`/icons/${weather.current.weather[0].icon}.svg`} alt={`Icon showing the weather as ${capitalise(weather.current.weather[0].description)}`}></img> : ""}
              </div>
              <div className="weather-info">
                <Typography variant="h3" color="text.primary">
                    {weather ? `${weather.current.temp}°C` : "Awaiting Data"}
                </Typography>
                <Typography variant="subtitle1" component="p" color="text.primary">
                        {weather ? `Feels like ${weather.current.feels_like}°C` : ""}
                </Typography>
              </div>
            </div>

        </CardContent>
        <CardActions disableSpacing sx={{display: "flex", justifyContent: 'flex-end'}}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
        </Collapse>
        </Card>
    </div>
  );
}