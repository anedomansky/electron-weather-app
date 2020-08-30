import React from 'react';
import './Footer.scss';
import Button from '../button/Button';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { shell } = require('electron');

const Footer: React.FC = () => {
    const handleExternalLink = () => {
        shell.openExternal('https://www.metaweather.com/');
    };

    return (
        <footer>
            <Button
                ariaLabel="visit metaweather.com"
                type="button"
                onClick={handleExternalLink}
                onKeyDown={(e) => ((e.key === 'Enter' || e.keyCode === 13) ? handleExternalLink() : null)}
            >
                <span>Powered by MetaWeather.com</span>
            </Button>
        </footer>
    );
};

export default Footer;
