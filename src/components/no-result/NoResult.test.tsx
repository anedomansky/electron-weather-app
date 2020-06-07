import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NoResult from './NoResult';

test('Renders the NoResult component', () => {
    const { container } = render(<HashRouter><NoResult /></HashRouter>);
    expect(container).toBeInTheDocument();
});
