import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

test('Renders the Loading component', () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
});
