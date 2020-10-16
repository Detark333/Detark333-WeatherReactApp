import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CertainCity from "./CertainCity";
import { useState } from 'react';

function Main(props){
    let obj = null;
    const [nameCity, setNameCity] = useState(obj);
    const [isTrue, setTrue] = useState(false);
    return (
            <main>
                <h1>Погода в {props.name}</h1>
                <h2>Температура: {props.temp} градусов</h2>
                <div>
                    <div className="input-group input-group-sm mb-3" >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Город</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                               onChange={(e) => {
                                   let city = ""
                                   city = e.target.value
                                   console.log(city)
                                   setNameCity(city)
                               }}/>
                    </div>
                </div>
                <button type="button" className="btn btn-secondary" onClick={() => setTrue(!isTrue)}>Выбрать город</button>
                {isTrue ? <CertainCity nameCity={nameCity}/>: null}

            </main>
    );
}

export default Main;