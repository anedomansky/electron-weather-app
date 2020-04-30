import React from 'react';
import { render } from '@testing-library/react';
import ResultPage from './ResultPage';

test('Renders the ResultPage component', () => {
    const { container } = render(<ResultPage />);
    expect(container).toBeInTheDocument();
});
