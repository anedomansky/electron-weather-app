import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Search from './Search';

test('Renders the Search component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><Search /></Router>);
    expect(container).toBeInTheDocument();
});

test('Fires the onChange event', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(<Router history={history}><Search /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.change(getByTestId('form-input'), { target: { value: 'a' } });
});

test('Fires the onSubmit event', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(<Router history={history}><Search /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.change(getByTestId('form-input'), { target: { value: 'a' } });
    fireEvent.submit(getByTestId('form-submit'));
});

test('Fires the onSubmit event with empty location', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(<Router history={history}><Search /></Router>);
    expect(container).toBeInTheDocument();
    fireEvent.change(getByTestId('form-input'), { target: { value: '' } });
    fireEvent.submit(getByTestId('form-submit'));
});
