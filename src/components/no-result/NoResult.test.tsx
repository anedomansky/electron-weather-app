import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NoResult from './NoResult';

test('Renders the NoResult component', () => {
    const { container } = render(<BrowserRouter><NoResult /></BrowserRouter>);
    expect(container).toBeInTheDocument();
});
