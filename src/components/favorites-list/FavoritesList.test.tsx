import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import FavoritesList from './FavoritesList';

test('Renders the FavoritesList component', () => {
    const { container } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
});
