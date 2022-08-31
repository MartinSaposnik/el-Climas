import React from 'react';
import style from'./App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  const [state, setCities] = React.useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => {
            oldCities.push(ciudad)
            return oldCities;
          });
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

  return (
    <div className={style.app}>
      <header className={style.header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </header>
      <main className={style.main}>
      <section className={style.mainCity}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
          main={true}
        />
      </section>

      <section className={style.reelCities}>
        <Cards
          cities={state}
        />
      </section>
      </main>

    </div>
  );
}

export default App;