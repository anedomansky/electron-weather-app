import React from 'react';
import { IWeatherData } from '../../interfaces/IWeatherData';
import './WeatherDetails.scss';

interface Props {
    details: IWeatherData | null;
    location?: string;
}

const WeatherDetails: React.FC<Props> = ({ details, location }) => (
    <div className="details">
        <span>{location}</span>
        {details && (
            <>
                <p>{details.min_temp}</p>
                <p>{details.wind_direction_compass}</p>
                <p>{details.wind_speed}</p>
                <p>{details.the_temp}</p>
                <p>{details.applicable_date}</p>
                <p>{details.max_temp}</p>
                <p>{details.humidity}</p>
            </>
        )}
    </div>
);

export default WeatherDetails;
