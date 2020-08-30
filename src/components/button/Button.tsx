import React from 'react';
import './Button.scss';

interface Props {
    type: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    testId?: string;
    ariaLabel: string;
}

const Button: React.FC<Props> = ({ type, children, onClick, onKeyDown, testId, ariaLabel }) => (
    <button
        type={type}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onKeyDown}
        data-testid={testId}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

export default Button;
