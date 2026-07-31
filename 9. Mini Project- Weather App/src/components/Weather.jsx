import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import { useState } from "react";
import "./weather.css"

export default function Weather(){

   const [info , setInfo] = useState({
                                        city:"Mumbai",
                                        temp:28.49,
                                        temp_min: 28.49,
                                        temp_max: 28.49,
                                        humidity: 83,
                                        feelsLike:33.92,
                                        weather:"light rain",
                                        icon:"10d", 
                        });

   const updateInfo = (newInfo) => {
     setInfo(newInfo);
   }                     

    return(
     <>
        <SearchBox update = {updateInfo}></SearchBox>

         <WeatherInfo info = {info}></WeatherInfo> 
     </>
    );
}
