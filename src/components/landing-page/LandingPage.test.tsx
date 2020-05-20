import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import LandingPage from './LandingPage';

test('Renders the LandingPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><LandingPage /></Router>);
    expect(container).toBeInTheDocument();
});
