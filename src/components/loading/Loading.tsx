import React from 'react';
import './Loading.scss';

const Loading: React.FC = () => (
    <article className="loading">
        <div className="loading__content">
            <h1 data-testid="loading">Loading...</h1>
        </div>
    </article>
);

export default Loading;
