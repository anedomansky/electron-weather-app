import { IWeatherData } from '../interfaces/IWeatherData';

class WeatherService {
    private woeidBaseUrl: string;

    private weatherDataBaseUrl: string;

    private static instance: WeatherService;

    constructor() {
        this.woeidBaseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';
        this.weatherDataBaseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';
    }

    public static getInstance(): WeatherService {
        if (this.instance) {
            return this.instance;
        }
        return new WeatherService();
    }

    public async getWeatherData(location?: string): Promise<IWeatherData[]> {
        const woeidResponseRaw = await fetch(`${this.woeidBaseUrl}${location}`);
        const woeidResponse = await woeidResponseRaw.json();
        const { woeid } = await woeidResponse[0];
        const weatherDataResponseRaw = await fetch(`${this.weatherDataBaseUrl}${woeid}`);
        const weatherDataResponse = await weatherDataResponseRaw.json();
        const weatherDataConsolidated: IWeatherData[] = weatherDataResponse.consolidated_weather;
        console.log(weatherDataConsolidated);
        return weatherDataConsolidated;
    }
}

export default WeatherService;
