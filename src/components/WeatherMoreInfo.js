import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons'

export const WeatherMoreInfo = ({ wind, humidity, pressure }) => {
    return (
        <div className="weather-more-info">
            <div className="wind">
                <div className="icon">
                    <FontAwesomeIcon icon={faWind} />
                </div>
                <div className="value">
                    <span>{wind} m/s</span>
                    <span>Wind</span>
                </div>
            </div>
            <div className="humidity">
                <div className="icon">
                    <FontAwesomeIcon icon={faCloudRain} />
                </div>
                <div className="value">
                    <span>{humidity}%</span>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="pressure">
                <div className="icon">
                    <FontAwesomeIcon icon={faTemperatureLow} />
                </div>
                <div className="value">
                    <span>{pressure} mb</span>
                    <span>Pressure</span>
                </div>
            </div>
        </div>
    )
}