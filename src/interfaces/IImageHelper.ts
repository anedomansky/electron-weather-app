import { IWeatherStates } from './IWeatherStates';

export interface IImageHelper {
    weatherStates: IWeatherStates;
    getWeatherIcon(weatherStateAbbr: string): string;
}
