import { IImageHelper } from '../interfaces/IImageHelper';
import { IWeatherStates } from '../interfaces/IWeatherStates';
import nameof from './nameof';
import snowIcon from '../assets/icons/snow.svg';
import sleetIcon from '../assets/icons/sleet.svg';
import hailIcon from '../assets/icons/hail.svg';
import thunderstormIcon from '../assets/icons/thunderstorm.svg';
import heavyRainIcon from '../assets/icons/heavy_rain.svg';
import lightRainIcon from '../assets/icons/light_rain.svg';
import showersIcon from '../assets/icons/showers.svg';
import heavyCloudIcon from '../assets/icons/heavy_cloud.svg';
import lightCloudIcon from '../assets/icons/light_cloud.svg';
import clearIcon from '../assets/icons/clear.svg';

class ImageHelper implements IImageHelper {
    private static instance: IImageHelper;

    weatherStates: IWeatherStates;

    constructor() {
        this.weatherStates = {
            sn: snowIcon,
            sl: sleetIcon,
            h: hailIcon,
            t: thunderstormIcon,
            hr: heavyRainIcon,
            lr: lightRainIcon,
            s: showersIcon,
            hc: heavyCloudIcon,
            lc: lightCloudIcon,
            c: clearIcon,
        };
    }

    public static getInstance(): ImageHelper {
        if (!ImageHelper.instance) {
            ImageHelper.instance = new ImageHelper();
        }
        return ImageHelper.instance;
    }

    public getWeatherIcon(weatherStateAbbr: string): string {
        return this.weatherStates[weatherStateAbbr];
    }
}

export default ImageHelper;
