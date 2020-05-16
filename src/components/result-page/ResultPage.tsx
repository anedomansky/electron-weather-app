import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResultPage: React.FC = () => {
    const { location } = useParams();

    useEffect(() => {
        // needs a proxy in order to fetch the weather data.
        (async function getData(): Promise<void> {
            const woeidResponseRaw = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`);
            const woeidResponse = await woeidResponseRaw.json();
            const { woeid } = await woeidResponse[0];
            console.log(woeid);
            const weatherDataResponseRaw = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
            const weatherDataResponse = await weatherDataResponseRaw.json();
            console.log(weatherDataResponse);
        }());
    });

    return (
        <>
            <h1>ResultPage works!</h1>
            <p>{location}</p>
        </>
    );
};

export default ResultPage;
