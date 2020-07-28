import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWeatherData } from '../../interfaces/IWeatherData';
import Loading from '../loading/Loading';
import NoResult from '../no-result/NoResult';
import WeatherDetails from '../weather-details/WeatherDetails';
import WeatherPreview from '../weather-preview/WeatherPreview';
import addIcon from '../../assets/icons/plus.svg';
import './ResultPage.scss';
import useStores from '../../hooks/useStores';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require('electron');

const ResultPage: React.FC = () => {
    const { favoritesStore } = useStores();
    const { location } = useParams();
    const [fetchError, setFetchError] = useState<boolean>(false);
    const [consolidatedWeatherData, setConsolidatedWeatherData] = useState<IWeatherData[] | null>(null);
    const [updating, setUpdating] = useState<boolean>(false);

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
    }, [location]);

    const addFavorite = (favoriteLocation: string) => {
        if (favoriteLocation) {
            favoritesStore.addFavoriteToLocalStorage(favoriteLocation);
        }
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
                            <div className="result-page__add">
                                <button
                                    data-testid="add-btn"
                                    className="a11y-btn"
                                    type="button"
                                    tabIndex={0}
                                    onClick={() => addFavorite(location)}
                                    onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? addFavorite(location) : null)}
                                >
                                    <img src={addIcon} alt="Add" />
                                </button>
                            </div>
                            <div className="result-page__preview--1">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[1]} />
                            </div>
                            <div className="result-page__preview--2">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[2]} />
                            </div>
                            <div className="result-page__preview--3">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[3]} />
                            </div>
                            <div className="result-page__preview--4">
                                <WeatherPreview previewData={consolidatedWeatherData && consolidatedWeatherData[4]} />
                            </div>
                        </article>
                    )}
                </>
            )}
        </>
    );
};

export default ResultPage;
