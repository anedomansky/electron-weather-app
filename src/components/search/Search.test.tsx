import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Search from './Search';

test('Renders the Search component', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}><Search /></Router>);
    expect(container).toBeInTheDocument();
});
