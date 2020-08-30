import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Renders the Button component', () => {
    const { container } = render(<Button type="button" ariaLabel="test" />);
    expect(container).toBeInTheDocument();
});

test('Fires the onClick event', () => {
    const { container, getByTestId } = render(<Button type="button" testId="test-btn" onClick={() => null} ariaLabel="test" />);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('test-btn'));
});

test('Fires the onKeyDown event', () => {
    const { container, getByTestId } = render(<Button type="button" testId="test-btn" onKeyDown={(e) => ((e.key === 'Enter' || e.keyCode === 13) ? 'correct' : null)} ariaLabel="test" />);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('test-btn'), { key: 'Enter', code: 13 });
    fireEvent.keyDown(getByTestId('test-btn'), { key: 'Space', code: 32 });
});
