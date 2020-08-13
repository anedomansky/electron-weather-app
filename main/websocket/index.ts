import { ipcMain } from 'electron';
import 'isomorphic-fetch';
import { IWeatherData } from '../interfaces/IWeatherData';

const woeidBaseUrl = 'https://www.metaweather.com/api/location/search/?query=';
const weatherDataBaseUrl = 'https://www.metaweather.com/api/location/';

ipcMain.handle('/getWeatherData', async (event, location: string) => {
    try {
        console.log('/getWeatherData');
        const woeidResponseRaw = await fetch(`${woeidBaseUrl}${location}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        });
        const woeidResponse = await woeidResponseRaw.json();
        const { woeid } = await woeidResponse[0];
        const weatherDataResponseRaw = await fetch(`${weatherDataBaseUrl}${woeid}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        });
        const weatherDataResponse = await weatherDataResponseRaw.json();
        const weatherDataConsolidated: IWeatherData[] = weatherDataResponse.consolidated_weather;
        return weatherDataConsolidated;
    } catch (error) {
        console.trace(error);
        throw new Error(error);
    }
});
