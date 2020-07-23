import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from './Footer';

test('Renders the Footer component', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
});

test('Fires the onClick event', () => {
    const { container, getByText } = render(<Footer />);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByText('Powered by MetaWeather.com'));
});

test('Fires the onKeyDown event', () => {
    const { container, getByText } = render(<Footer />);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByText('Powered by MetaWeather.com'), { key: 'Enter', code: 13 });
    fireEvent.keyDown(getByText('Powered by MetaWeather.com'), { key: 'Space', code: 32 });
});
