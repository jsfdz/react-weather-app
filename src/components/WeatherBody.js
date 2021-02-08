import React from 'react'
import { Toggle } from './Toggle'
import { celsiusToFahrenheit } from '../helpers/celsiusToFahrenheit'

export const WeatherBody = ({ icon, toggle, temp, description, city, country, onClick }) => {
    return (
        <div className="weather-body">
            <img src={`/img/${icon}.png`} alt="icon" />
            <div className="temp">
                {
                    toggle
                        ?
                        <>
                            {celsiusToFahrenheit(temp)} ° <span>F</span>
                        </>
                        :
                        <>
                            {temp}°<span>C</span>
                        </>
                }
            </div>
            <div className="description">{description}</div>
            <div className="location">{city}, {country}</div>
            <Toggle onClick={onClick} />
        </div >
    )
}