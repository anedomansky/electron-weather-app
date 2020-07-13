import React from 'react';
import { IWeatherData } from '../../interfaces/IWeatherData';
import './WeatherPreview.scss';
import ImageHelper from '../../helpers/ImageHelper';

interface Props {
    previewData: IWeatherData | null;
}

const WeatherPreview: React.FC<Props> = ({ previewData }) => (
    <>
        {previewData && (
            <div className="preview">
                <img className="preview__image" src={ImageHelper.getInstance().getWeatherIcon(previewData.weather_state_abbr)} alt="Weather State" />
                <span className="preview__temp">{`${Math.floor(previewData.the_temp)} °C`}</span>
                <span className="preview__date">{previewData.applicable_date}</span>
            </div>
        )}
    </>
);

export default WeatherPreview;
