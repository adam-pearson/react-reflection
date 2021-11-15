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
    createData('Precipitation', weather.precipitation.precipitation ? weather.precipitation.precipitationType : "N/A"),
    createData('Wind Speed', weather.weatherText ? `${weather.wind.speed} km/h` : ""),
    createData('Wind Direction', weather.weatherText ? `${weather.wind.direction}° ${weather.wind.english}` : ""),
    createData('Humidity', weather.weatherText ? `${weather.relativeHumidity}%`: ""),
    createData('UV', weather.weatherText ? `${weather.uvIndex.index} (${weather.uvIndex.indexText})` : ""),
  ];


  const time = weather.weatherText ? weather.recordedTime.substring(11, 16) : "00:00";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
        <Card className="current-card">
        <CardHeader
            title={weather.weatherText ? `The weather in ${location.EnglishName} is ${weather.weatherText.toLowerCase()}.` : "Place Name"}
            subheader={time}
        />
        <CardContent>
            <div className="weather-icon-container">
              <div className="weather-icon">
                {weather.weatherText ? <img src={weather.weatherIconFile} alt={`Icon showing the weather as ${weather.weatherText}`}></img> : ""}
              </div>
              <div className="weather-info">
                <Typography variant="h3" color="text.primary">
                    {weather.weatherText ? `${weather.temperature.temp}°C` : "Awaiting Data"}
                </Typography>
                <Typography variant="subtitle1" component="p" color="text.primary">
                        {weather.weatherText ? `RealFeel® ${weather.temperature.realFeelTemp}°C` : ""}
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