import React from 'react';
import { IWeatherData } from '../../interfaces/IWeatherData';
import './WeatherDetails.scss';
import ImageHelper from '../../helpers/ImageHelper';
import arrowIcon from '../../assets/icons/arrow.svg';
import humidityIcon from '../../assets/icons/humidity.svg';

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
                    <img className={`compass-icon compass-icon--${details.wind_direction_compass}`} src={arrowIcon} alt="Compass arrow" />
                    <span className="wind-speed">{`${Math.floor(details.wind_speed * 1.60934)} km/h`}</span>
                </div>
                <div className="details__temp">
                    <span>{`${Math.floor(details.the_temp)} °C`}</span>
                </div>
                <div className="details__humidity">
                    <img src={humidityIcon} alt="Humidity" />
                    <span>{`${details.humidity} %`}</span>
                </div>
            </>
        )}
    </div>
);

export default WeatherDetails;
