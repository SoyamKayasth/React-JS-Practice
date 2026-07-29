import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function WeatherInfo({info}){

    let cold_img = "https://images.unsplash.com/photo-1732183940953-4fabd045d5e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_img = "https://images.unsplash.com/photo-1656890612031-699e56451ea8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let rainy_img = "https://images.unsplash.com/photo-1548183420-34082a25f0d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



    return(
         <div className="infoBox">
           <h1>Weather info</h1>

           <div className="card-container">
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://images.unsplash.com/photo-1592698117601-70c282996f9c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="clear sky"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className="city">{info.city}</div>
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