import { useEffect, useState } from "react";
import "./clima.css";
function Clima(){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.275585581258397;
    const lgn = -97.95840169936356;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=> res.json())
        .then((data) =>{
            setClima(data);
        })
        .catch((error) => console.error("Error:" ,error));
    }, [] )
    return(
        <div className="divClima">
            {
                clima ? (
                    <>
                    <p>{clima.name} Temp: {clima.main.temp}°C | Hum: {clima.main.humidity}%</p>
                    <p>Descripcion: {clima.weather[0].description}</p>
                    </>
                ): (
                    <p>Cargando clima...</p>
                )
            }

        </div>
    )
}
export default Clima;
