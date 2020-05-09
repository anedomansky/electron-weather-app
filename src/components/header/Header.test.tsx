import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('Renders the Header component', () => {
    const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(container).toBeInTheDocument();
});
