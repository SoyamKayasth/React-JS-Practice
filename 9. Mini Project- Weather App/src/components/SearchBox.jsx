import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import "./weather.css"
export default function SearchBox({update}){
  
const [city , setCity] = useState("");
const [err , setErr] = useState(false);

const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = import.meta.env.VITE_API_KEY;

const handleChange = (e) => {
    setCity(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
}

const getWeatherInfo = async() => {
    try{
    setErr(false);
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await res.json();
    let result = {
                  city:jsonRes.name,
                  temp:jsonRes.main.temp,
                  temp_min: jsonRes.main.temp_min,
                  temp_max: jsonRes.main.temp_max,
                  humidity: jsonRes.main.humidity,
                  feelsLike:jsonRes.main.feels_like,
                  weather:jsonRes.weather[0].description,
                  icon:jsonRes.weather[0].icon, 
    };
    update(result);
  }catch(e){
      console.log(e);
      setErr(true);
  }
}

 return(
    <div className="search-container">
        <h2 className='heading'>Search For Weather</h2>
        <form onSubmit={handleSubmit}>
        <div className="searchBox">
        <div className='inputBox'>
        <TextField
    id="city"
    name="city"
    label="City Name"
    variant="outlined"
    onChange={handleChange}
    value={city}
    required
    fullWidth
/>


  
   </div>
  <br />
  <br />
    
   <div>
      <Button
    type="submit"
    variant="contained"
    endIcon={<SearchIcon />}
    className="searchBtn"
>
    Search
</Button>
      </div>
      </div>
        {err && <p className='error'>No such place exists!</p>}
      </form>
    </div>
 );

}