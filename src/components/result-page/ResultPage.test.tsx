import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import ResultPage from './ResultPage';

const { ipcRenderer } = require('electron');

test('Renders the ResultPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
});

test('Receives weather data', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.send).toBeCalledWith('/getWeatherData', 'Dortmund');
    expect(ipcRenderer.on).toBeCalledWith('WEATHER_DATA', expect.any(Function));
});

test('Does not receive weather data', async () => {
    const history = createMemoryHistory();
    history.push('/result/Unna');
    const { container } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.send).toBeCalledWith('/getWeatherData', 'Unna');
    expect(ipcRenderer.on).toBeCalledWith('NO_DATA', expect.any(Function));
    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
});

test('Fires the onClick event', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('add-btn'));
});

test('Fires the onKeyDown event with enter', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Enter', code: 13 });
});

test('Fires the onKeyDown event with any other key', () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Space', code: 32 });
});
