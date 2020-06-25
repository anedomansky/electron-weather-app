import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWeatherData } from '../../interfaces/IWeatherData';
import Loading from '../loading/Loading';
import NoResult from '../no-result/NoResult';
import WeatherDetails from '../weather-details/WeatherDetails';
import WeatherPreview from '../weather-preview/WeatherPreview';
import addIcon from '../../assets/icons/plus.svg';
import './ResultPage.scss';
import { IFavorite } from '../../interfaces/IFavorite';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require('electron');

// TODO: Work on the layout
// TODO: Create the components
// TODO: Style the components
const ResultPage: React.FC = () => {
    const { location } = useParams();
    const [fetchError, setFetchError] = useState<boolean>(false);
    const [consolidatedWeatherData, setConsolidatedWeatherData] = useState<IWeatherData[] | null>(null);
    const [updating, setUpdating] = useState<boolean>(true);

    useEffect(() => {
        ipcRenderer.send('/getWeatherData', location);
        ipcRenderer.on('WEATHER_DATA', (event: unknown, weatherData: IWeatherData[]) => {
            setConsolidatedWeatherData(weatherData);
            setUpdating(false);
        });
        ipcRenderer.on('NO_DATA', (event: unknown, msg: string) => {
            console.error(msg);
            setFetchError(true);
            setUpdating(false);
        });

        return () => {
            ipcRenderer.removeAllListeners('WEATHER_DATA');
            ipcRenderer.removeAllListeners('NO_DATA');
        };
    }, []);

    const addFavorite = () => {
        const favorites: string[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');
        const newFavorite: IFavorite = {
            location,
        };
        window.localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
    };

    return (
        <>
            {updating ? <Loading /> : (
                <>
                    {fetchError ? (
                        <NoResult />
                    ) : (
                        <article className="result-page">
                            <div className="result-page__details">
                                <WeatherDetails location={location} details={consolidatedWeatherData && consolidatedWeatherData[0]} />
                            </div>
                            <div className="result-page__add" role="button" tabIndex={0} onClick={addFavorite} onKeyDown={() => null}>
                                <img src={addIcon} alt="Add" />
                            </div>
                            <div className="result-page__preview--1">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[1]} />
                            </div>
                            <div className="result-page__preview--2">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[1]} />
                            </div>
                            <div className="result-page__preview--3">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[1]} />
                            </div>
                            <div className="result-page__preview--4">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[1]} />
                            </div>
                        </article>
                    )}
                </>
            )}
        </>
    );
};

export default ResultPage;
