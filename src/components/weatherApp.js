import {useState} from "react"
import WeatherForm from "./weatherForm"

export default function WeatherApp(){

    const [weather, setWeather] = useState(null);

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&Q=${city}`);
            const json = await request.json();
        }catch(error){

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return <div>
        <WeatherForm onchangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
}