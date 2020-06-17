import React from 'react';
import { IWeatherData } from '../../interfaces/IWeatherData';
import './WeatherDetails.scss';

interface Props {
    details: IWeatherData | null;
    location?: string;
}

const WeatherDetails: React.FC<Props> = ({ details, location }) => (
    <div className="details">
        <div className="details__location">
            <span>{location && location.replace(location[0], location[0].toUpperCase())}</span>
        </div>
        {details && (
            <>
                <div className="details__weather">
                    <span>{details.weather_state_abbr}</span>
                </div>
                <div className="deatils__date">
                    <span>{details.applicable_date}</span>
                </div>
                <div className="details__min">
                    <span>{Math.floor(details.min_temp)}</span>
                </div>
                <div className="details__max">
                    <span>{Math.floor(details.max_temp)}</span>
                </div>
                <div className="details__wind">
                    <span className="compass-icon">{details.wind_direction_compass}</span>
                    <br />
                    <span className="wind-speed">{Math.floor(details.wind_speed)}</span>
                </div>
                <div className="details__temp">
                    <span>{Math.floor(details.the_temp)}</span>
                </div>
                <div className="details__humidity">
                    <span>{details.humidity}</span>
                </div>
            </>
        )}
    </div>
);

export default WeatherDetails;
