import React from 'react';
import './Footer.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { shell } = require('electron');

const Footer: React.FC = () => {
    const handleExternalLink = () => {
        shell.openExternal('https://www.metaweather.com/');
    };

    return (
        <footer>
            <button type="button" onClick={handleExternalLink} onKeyDown={(e) => ((e.key === 'Enter' || e.keyCode === 13) ? handleExternalLink() : null)}>Powered by MetaWeather.com</button>
        </footer>
    );
};

export default Footer;
