import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeatherService from '../../services/WeatherService';
import { IWeatherData } from '../../interfaces/IWeatherData';

const ResultPage: React.FC = () => {
    const { location } = useParams();
    const [fetchError, setFetchError] = useState<boolean>(false);
    const [consolidatedWeatherData, setConsolidatedWeatherData] = useState<IWeatherData[] | null>(null);
    const [updating, setUpdating] = useState<boolean>(true);

    useEffect(() => {
        // needs a proxy in order to fetch the weather data.
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
            {updating ? <h1>Loading...</h1> : (
                <>
                    {fetchError ? (
                        <h1>No Weather Data found for this location... Please try another location.</h1>
                    ) : (
                        <>
                            <h1>ResultPage works!!</h1>
                            <p>{location}</p>
                            <p>{consolidatedWeatherData && consolidatedWeatherData[0].the_temp}</p>
                        </>
                    )}
                </>
            )}

        </>
    );
};

export default ResultPage;
