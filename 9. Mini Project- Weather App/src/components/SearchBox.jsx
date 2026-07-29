import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import "./weather.css"
export default function SearchBox(){
  
const [city , setCity] = useState("");
const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = import.meta.env.VITE_API_KEY;

const handleChange = (e) => {
    setCity(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    getWeatherInfo();
    setCity("");
}

const getWeatherInfo = async() => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let resJson = await res.json();
     console.log(resJson);
}

 return(
    <div className="search-container">
          <h2 className='heading'>Search For Weather</h2>
        <form onSubmit={handleSubmit}>
        <div className="searchBox">
        <div className='inputBox'>
        <TextField id="city" name='city' 
        label="City Name" 
        onChange={handleChange}
        value={city}
        variant="outlined" required
/>
  
   </div>
   <div>
      <Button type='submit' variant="contained" className='search-button' endIcon=  {<SearchIcon />}>
        Search
      </Button>
      </div>
      </div>
      </form>
    </div>
 );

}