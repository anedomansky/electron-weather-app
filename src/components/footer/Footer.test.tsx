import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Renders the Footer component', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
});
