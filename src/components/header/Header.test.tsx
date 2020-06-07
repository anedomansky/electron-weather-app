import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';

test('Renders the Header component', () => {
    const { container } = render(<HashRouter><Header /></HashRouter>);
    expect(container).toBeInTheDocument();
});
