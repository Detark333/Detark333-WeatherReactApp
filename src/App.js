import React from 'react';
import './App.css';
import './Header/Header.js';
import { usePosition } from 'use-position';
import { useState } from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = 'a12baec2386a8c822372ec636840b72b'


function App(){
    const [name, setName] = useState(null);
    const [temp, setTemp] = useState(null);
    const [isTrouble, setTrouble] = useState(false);
    const watch = false;
    let options = {
        enableHighAccuracy: Infinity,
        timeout: 500,
        maximumAge: 0
    };
    const {
        latitude,
        longitude
    } = usePosition(watch, options);
    console.log(latitude)
    let a;
        const string = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;
        if (latitude !== undefined) {
            a = null;
            console.log(string)
            fetch(string)
                .then(response =>
                    response.json()
                )
                .then((data) => {
                    a = data;
                    setName(a.name);
                    setTemp(a.main.temp - 273.15);
                })
                .catch(() => {
                    setTrouble(true);
                });
        }
  return (
      <div style={{backgroundColor: "#e6e6e6" }}>
          <Header/>
          {isTrouble ? <h1>У вашего браузера проблемы с геолокацией</h1> : <Main name={name} temp={temp}/>}
      </div>
  );
}

export default App;
