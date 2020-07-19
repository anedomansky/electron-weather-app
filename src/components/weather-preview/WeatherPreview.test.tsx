import React from 'react';
import { render } from '@testing-library/react';
import WeatherPreview from './WeatherPreview';
import { IWeatherData } from '../../interfaces/IWeatherData';

const data: IWeatherData = {
    id: 0,
    weather_state_name: 'heavy clouds',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'NNE',
    created: '2020-07-19',
    applicable_date: '2020-07-19',
    min_temp: 20.5,
    max_temp: 25.4,
    the_temp: 24.3,
    wind_speed: 7,
    wind_direction: 2,
    air_pressure: 2,
    humidity: 40,
    visibility: 10,
    predictability: 90,
};
test('Renders the WeatherPreview component', () => {
    const { container } = render(<WeatherPreview previewData={data} />);
    expect(container).toBeInTheDocument();
});
