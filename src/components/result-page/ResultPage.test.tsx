import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import ResultPage from './ResultPage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require('electron');

beforeEach(() => {
    jest.clearAllMocks();
});

test('Renders the ResultPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
});

test('Does receive weather data', async () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId, findByText } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.invoke).toHaveBeenCalledWith('/getWeatherData', 'Dortmund');
    expect(getByTestId('loading')).toBeInTheDocument();
    await findByText('Dortmund');
});

test('Does not receive weather data', async () => {
    const history = createMemoryHistory();
    history.push('/result/TestCity');
    const { container, getByTestId, findByTestId } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.invoke).toHaveBeenCalledWith('/getWeatherData', 'TestCity');
    expect(getByTestId('loading')).toBeInTheDocument();
    expect(ipcRenderer.invoke).rejects.toThrowError('Error');
    await findByTestId('no-result');
    expect(getByTestId('no-result')).toBeInTheDocument();
});

test('Fires the onClick event', async () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId, findByText } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.invoke).toHaveBeenCalledWith('/getWeatherData', 'Dortmund');
    expect(getByTestId('loading')).toBeInTheDocument();
    await findByText('Dortmund');
    fireEvent.click(getByTestId('add-btn'));
});

test('Fires the onKeyDown event', async () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId, findByText } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.invoke).toHaveBeenCalledWith('/getWeatherData', 'Dortmund');
    expect(getByTestId('loading')).toBeInTheDocument();
    await findByText('Dortmund');
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Enter', code: 13 });
});

test('Fires the onKeyDown event with wrong key', async () => {
    const history = createMemoryHistory();
    history.push('/result/Dortmund');
    const { container, getByTestId, findByText } = render(<Router history={history}><Route path="/result/:location" component={ResultPage} /></Router>);
    expect(container).toBeInTheDocument();
    expect(ipcRenderer.invoke).toHaveBeenCalledWith('/getWeatherData', 'Dortmund');
    expect(getByTestId('loading')).toBeInTheDocument();
    await findByText('Dortmund');
    fireEvent.keyDown(getByTestId('add-btn'), { key: 'Space', code: 32 });
});
