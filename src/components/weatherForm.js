import {useState} from "react";
import styles from './weatherForm.module.css';

export default function WeatherForm({ onChangeCity }){
    const [city, setCity] = useState("");

    function onChange(e){
        const value = e.target.value;
            if(value !== ''){
                setCity(value);
            }
    
    }

    function handleSubmit(e) {
        e.preventDefault();

        onChangeCity(city)
    }

    return <div onSubmit={handleSubmit} className={styles.container}>
        <form>
            <input  type='text' 
                    onChange={onChange} 
                    className={styles.input} placeholder="Search city..." />
        </form>
    </div>


}