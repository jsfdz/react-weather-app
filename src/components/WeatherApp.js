import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import { Skeleton } from './Skeleton'
import { WeatherBody } from './WeatherBody'
import { WeatherMoreInfo } from './WeatherMoreInfo'

export const WeatherApp = () => {
    const
        API_KEY = "0a60fe0cf856fbf0895cd65079f78596",
        BASE = 'https://api.openweathermap.org/data/2.5/weather?',
        GEOLOCATION = navigator.geolocation,
        KELVIN = 273

    const
        [coordinates, setCoordinates] = useState({}),
        [weatherData, setWeatherData] = useState({}),
        [loading, setLoading] = useState(false),
        [toggle, setToggle] = useState(false),
        [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        const onError = () => {
            fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=82afd6dd808d4c13858aaec0b121f9c2`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(data => {
                    const coords = {
                        latitude: data.latitude,
                        longitude: data.longitude
                    }
                    setCoordinates(coords)
                })
        }

        setLoading(true)

        if ('geolocation' in navigator) GEOLOCATION.getCurrentPosition(position => setCoordinates(position.coords), onError)
    }, [GEOLOCATION])

    useEffect(() => {
        const getWeather = coordinates => {
            let setData = {}

            fetch(`${BASE}lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(data => {
                    setData.temperature = Math.floor(data.main.temp - KELVIN);
                    setData.description = data.weather[0].description;
                    setData.iconId = data.weather[0].icon;
                    setData.city = data.name;
                    setData.country = data.sys.country;
                    setData.wind = data.wind.speed;
                    setData.humidity = data.main.humidity;
                    setData.pressure = data.main.pressure;
                    setWeatherData(setData)
                    setLoading(false)
                })
                .catch(error => {
                    setErrorMsg(error.statusText)
                })
        }

        if (typeof coordinates.latitude !== 'undefined') {
            getWeather(coordinates)
        }

    }, [coordinates])

    const onClick = () => setToggle(!toggle)

    return (
        <div className="weather" style={{
            '--current-color': `var(--color-${weatherData.iconId})`,
            '--current-bg': `var(--bg-${weatherData.iconId})`
        }}>
            <h1> Weather </h1>

            <Message msg={errorMsg} />

            {
                loading
                    ?
                    <Skeleton />
                    :
                    <>
                        <WeatherBody
                            icon={weatherData.iconId}
                            toggle={toggle}
                            temp={weatherData.temperature}
                            description={weatherData.description}
                            city={weatherData.city}
                            country={weatherData.country}
                            onClick={onClick}
                        />

                        <WeatherMoreInfo
                            wind={weatherData.wind}
                            humidity={weatherData.humidity}
                            pressure={weatherData.pressure}
                        />
                    </>
            }
        </div>
    )
}