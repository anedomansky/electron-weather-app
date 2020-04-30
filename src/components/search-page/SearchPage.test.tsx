import React from 'react';
import { render } from '@testing-library/react';
import SearchPage from './SearchPage';

test('Renders the SearchPage component', () => {
    const { container } = render(<SearchPage />);
    expect(container).toBeInTheDocument();
});
