import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { flexbox } from '@mui/system';



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


export default function RecipeReviewCard({weather, location, useMetric}) {
  const [expanded, setExpanded] = React.useState(false);

  function createData(name,value) {
    return { name, value };
  }
  
  const rows = [
    createData('Precipitation', weather.precipitation.precipitation ? weather.precipitation.precipitationType : "N/A"),
    createData('Wind Speed', weather.weatherText ? useMetric ? `${weather.wind.speedMet} km/h` : `${weather.wind.speedImp} mi/h` : ""),
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
        <Card className="testing123" sx={{ width: 345, minWidth: 275 }}>
        <CardHeader
            title={weather.weatherText ? `${location.EnglishName} is ${weather.weatherText.toLowerCase()}.` : "Place Name"}
            subheader={time}
        />
        <CardContent>
            <div className="weather-icon-container">
                {weather.weatherText ? <img src={weather.weatherIconFile} alt={`Icon showing the weather as ${weather.weatherText}`}></img> : ""}
                <Typography variant="h3" color="text.primary">
                    {weather.weatherText ? useMetric ? `${weather.temperature.tempMet}°` : `${weather.temperature.tempImp}°` : "Awaiting Data"}
                    <span className="after-temp">
                        {weather.weatherText ? useMetric ? `C` : `F` : ""}
                    </span>
                    <Typography variant="subtitle1" color="text.primary">
                        {weather.weatherText ? useMetric ? `RealFeel® ${weather.temperature.realFeelTempMet}°C` : `RealFeel® ${weather.temperature.realFeelTempImp}°F` : ""}
                    </Typography>
                </Typography>
            </div>

        </CardContent>
        <CardActions disableSpacing sx={{display: "flex", justifyContent: 'flex-end'}}>
            {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore> */}
            <Button 
            variant="text"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
                {expanded ? "Show Less" : "Show More"}
            </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <TableContainer>
        <Table sx={{ minWidth: 275 }} aria-label="simple table">
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