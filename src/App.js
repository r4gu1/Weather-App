import { useState, useEffect } from "react";
import axios from "axios";
import './style.css';

function App() {
    const [city, setCity] = useState("");
    const [wea, setWea] = useState("");
    const [tem, setTem] = useState(null); 
    const [des, setDes] = useState("");

    function handleCity(evt) {
        setCity(evt.target.value);
    }

    function getWeather() {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ab50519769087d98f430fd4d7f48bc5`)
            .then(function (response) {
                console.log(response.data);
                setWea(response.data.weather[0].main);
                setTem(response.data.main.temp - 273.15); 
                setDes(response.data.weather[0].description);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                setWea("Error");
                setTem(null);
                setDes("");
            });
    }

    
    const createRaindrops = (numDrops = 180) => { 
      const rainContainer = document.createElement('div');
      rainContainer.className = 'rain-container';
      document.body.appendChild(rainContainer);
  
      for (let i = 0; i < numDrops; i++) { 
          const drop = document.createElement('div');
          drop.className = 'rain';
          rainContainer.appendChild(drop);
  
          
          drop.style.left = `${Math.random() * 100}vw`; 
          drop.style.animationDelay = `${Math.random() * 2}s`;       }
  };
  
 

    useEffect(() => {
        createRaindrops(180); 
    }, []);

    return (
        <div className="weather-container">
            <h1 className="weather-title">Weather Report</h1>
            <p className="weather-description">Can I provide the weather report for your city?</p>
            <input
                onChange={handleCity}
                type="text"
                placeholder="Enter your city"
                className="weather-input"
            />
            <button onClick={getWeather} className="weather-button">
                Get Report
            </button>
            <div className="weather-report">
                <h1><b>Weather: </b>{wea}</h1>
                <p><b>Temperature: </b>{tem !== null ? tem.toFixed(2) : "N/A"} °C</p> {/* Handle null */}
                <p><b>Description: </b>{des}</p>
            </div>
        </div>
    );
}

export default App;
