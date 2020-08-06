import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import ResultPage from './ResultPage';
import { IWeatherData } from '../../interfaces/IWeatherData';

const { ipcRenderer } = require('electron');

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

test('Renders the ResultPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
});

test('Does not receive weather data', async () => {
    const history = createMemoryHistory();
    history.push('/result/TestCity');
    const { container } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.send).toBeCalledWith('/getWeatherData', 'TestCity');
    ipcRenderer.on.mockImplementationOnce((event: any, callback: any) => {
        callback(event, 'No data received');
    });
    expect(ipcRenderer.on).toBeCalledWith('NO_DATA', expect.any(Function));
    expect(await screen.findByText(/No results found/)).toBeInTheDocument();
});

test('Receives weather data', async () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.send).toBeCalledWith('/getWeatherData', 'Dortmund');
    ipcRenderer.on.mockImplementationOnce((event: any, callback: any) => {
        callback(event, [data]);
    });
    expect(ipcRenderer.on).toBeCalledWith('WEATHER_DATA', expect.any(Function));
    expect(await screen.findByText(/Dortmund/)).toBeInTheDocument();
});

test('Fires the onClick and onKeyDown event', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('add-btn'));
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Enter', code: 13 });
});

test('Fires the onKeyDown event with any other key', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Space', code: 32 });
});
