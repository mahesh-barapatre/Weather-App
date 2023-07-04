import axios from 'axios';
import React, {useState , useEffect } from 'react'
import apiKeys from './apiKeys';
import DateTime from './date-time';

import SearchIcon from '@mui/icons-material/Search';

function Forcast() {

    const [query, setQuery]=useState('')
    const [error, setError]=useState('')
    const [weather, setWeather]=useState({})

    const search = (city) => {
        axios
          .get(
            `${apiKeys.base}weather?q=${
              typeof city==='object' ? query : city
            }&units=metric&APPID=${apiKeys.key}`
          )
          .then((response) => {
            // console.log(response.data)
            setWeather(response.data);
            setQuery("");
          })
          .catch(function (error) {
            console.log(error)
            setWeather("");
            setQuery("");
            setError({ message: "Not Found", query: query });            
          });
      };

useEffect(() => {
    search('mumbai')
},[]);
    
    const styleOfIcon = {
        height : '1cm',
        width : '1cm',
        cursor : 'pointer',
    }
    
    return (
        weather.weather ? (          
        <div className="display">
            <div className="first">
                <div >
                <h1>{weather.name}</h1>
                <h2>{weather.sys.country}</h2>
                </div>
                <main>
                <div>
                <DateTime />
                </div>
                <h1>{Math.round(weather.main.temp)}°C</h1>
                </main>                
            </div>
            <div className="second">
                <div id="condition">
                <h1>{weather.weather[0].main}</h1>
                <img
                    className="temp"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />

                </div>
                <main className='srcBar'>
                <input
            type="text"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
                <SearchIcon 
                    style={styleOfIcon}
                    onClick={()=>search(query)}
                />
                </main>
                <h2>{weather.name},{weather.sys.country}</h2>

                <>
                <div className="info" >
                    <h4>Temperature</h4>
                    <h4>{Math.round(weather.main.temp)}°C</h4>
                </div>
                <div className="info">
                    <h4>Humidity</h4>
                    <h4>{weather.main.humidity}%</h4>
                </div>
                <div className="info">
                    <h4>Visibility</h4>
                    <h4>{weather.visibility}ml</h4>
                </div>
                <div className="info">
                    <h4>Wind Speed</h4>
                    <h4>{Math.round(weather.wind.speed)}km/h</h4>
                </div>
                </>

            </div>
        </div>
    )
    :
    <div id='not_found'>
    <h1>{error.query} {error.message} </h1>
    <h2>ERROR 404!</h2>
    <main className='srcBar'>
                <input
            type="text"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            />
                <SearchIcon 
                    style={styleOfIcon}
                    onClick={()=>search(query)}
                    />
                </main>
                    <h3>*try another location</h3>
                    
    </div>
    ) 
        

}

export default Forcast
