import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('Renders the Search component', () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
});
