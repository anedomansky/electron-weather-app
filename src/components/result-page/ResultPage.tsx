import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeatherService from '../../services/WeatherService';
import { IWeatherData } from '../../interfaces/IWeatherData';
import Loading from '../loading/Loading';
import NoResult from '../no-result/NoResult';
import WeatherDetails from '../weather-details/WeatherDetails';
import WeatherPreview from '../weather-preview/WeatherPreview';
import addIcon from '../../assets/icons/plus.svg';
import './ResultPage.scss';

// TODO: Work on the layout
// TODO: Create the components
// TODO: Style the components
const ResultPage: React.FC = () => {
    const { location } = useParams();
    const [fetchError, setFetchError] = useState<boolean>(false);
    const [consolidatedWeatherData, setConsolidatedWeatherData] = useState<IWeatherData[] | null>(null);
    const [updating, setUpdating] = useState<boolean>(true);

    useEffect(() => {
        (async function getData(): Promise<void> {
            try {
                const weatherData = await WeatherService.getInstance().getWeatherData(location);
                setConsolidatedWeatherData(weatherData);
            } catch (error) {
                console.error(error);
                setFetchError(true);
            } finally {
                setUpdating(false);
            }
        }());
    }, []);

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
