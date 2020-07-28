import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ResultPage from './ResultPage';

test('Renders the ResultPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
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
