import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function WeatherInfo({info}){

    let cold_img = "https://images.unsplash.com/photo-1732183940953-4fabd045d5e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_img = "https://images.unsplash.com/photo-1656890612031-699e56451ea8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let rainy_img = "https://images.unsplash.com/photo-1727373217103-d64866ce6ee8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let clear_sky = "https://images.unsplash.com/photo-1566321343730-237ec35e53f3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
         <div className="infoBox">
           <h1>Weather info</h1>

           <div className="card-container">
               <Card className="weatherCard">
      <CardMedia
        sx={{ height: 180 }}
        image= {(info.humidity > 80) ? rainy_img : (info.temp > 27) ? hot_img : info.temp > 15 ? clear_sky : cold_img}
        title= {info.weather}
        className="weatherImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className="city">{info.city} <img src={`http://openweathermap.org/img/w/${info.icon}.png`} className="icon" alt="icon" /></div>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temp_min}&deg;C</p>
          <p>Max Temp = {info.temp_max}&deg;C</p>
          <p>The weather can be descibed as <b>{info.weather}</b> and feels like = {info.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>
    
    </Card>
    </div>
         </div>
        
    );
}