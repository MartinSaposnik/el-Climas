import {useState} from "react"
import WeatherForm from "./weatherForm"

export default function WeatherApp(){

    const [weather, setWeather] = useState(null);

    function handleChangeCity(city){

    }

    return <div>
        <WeatherForm onchangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
}