import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ResultPage from './ResultPage';

test('Renders the ResultPage component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><ResultPage /></Router>);
    expect(container).toBeInTheDocument();
});
