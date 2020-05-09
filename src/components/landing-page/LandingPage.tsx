import React from 'react';
import Search from '../search/Search';
import './LandingPage.scss';

const LandingPage: React.FC = () => (
    <article className="landing-page">
        <div className="landing-page__content">
            <Search />
        </div>
    </article>
);

export default LandingPage;
