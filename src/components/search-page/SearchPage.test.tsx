import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SearchPage from './SearchPage';

test('Renders the SearchPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><SearchPage /></Router>);
    expect(container).toBeInTheDocument();
});

test('Fires the onClick event', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(<Router history={history}><SearchPage /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('close-btn'));
});
