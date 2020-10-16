import React, {useState} from 'react';
const API_KEY = 'a12baec2386a8c822372ec636840b72b'

function CertainCity(props) {
    let obj = null;
    const [name, setName] = useState(obj);
    const [isTrue, setTrue] = useState(true);
    let a;
    console.log(props.nameCity)
    const string = "http://api.openweathermap.org/data/2.5/weather?q=" + props.nameCity + "&appid=" + API_KEY;
        a = null;
        console.log(string)
        fetch(string)
            .then(response =>
                response.json()
            )
            .then((data) => {
                a = data;
                setName(a.main.temp)
            })
            .catch(() => {
                setTrue(false);
                });
    return(
        <div>
            {isTrue ? <h1>В {props.nameCity} {(name - 273.3).toFixed(0)} градусов</h1> : <h1>Вы неправильно ввели название города</h1>}
        </div>
    );
}
export default CertainCity;
