import React from 'react';
import { IWeatherData } from '../../interfaces/IWeatherData';
import './WeatherDetails.scss';
import ImageHelper from '../../helpers/ImageHelper';

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
                    <img src={ImageHelper.getInstance().getWeatherIcon(details.weather_state_abbr)} alt="Weather State" />
                </div>
                <div className="details__date">
                    <span>{details.applicable_date}</span>
                </div>
                <div className="details__min">
                    <span>
                        {`${Math.floor(details.min_temp)} °C`}
                        <br />
                        min
                    </span>
                </div>
                <div className="details__max">
                    <span>
                        {`${Math.floor(details.max_temp)} °C`}
                        <br />
                        max
                    </span>
                </div>
                <div className="details__wind">
                    <span className="compass-icon">{details.wind_direction_compass}</span>
                    <br />
                    <span className="wind-speed">{`${Math.floor(details.wind_speed * 1.60934)} km/h`}</span>
                </div>
                <div className="details__temp">
                    <span>{`${Math.floor(details.the_temp)} °C`}</span>
                </div>
                <div className="details__humidity">
                    <span>
                        {`${details.humidity} %`}
                        <br />
                        Humidity
                    </span>
                </div>
            </>
        )}
    </div>
);

export default WeatherDetails;
