import React from 'react';
import { BeatLoader } from 'react-spinners';
import './Loading.scss';

const Loading: React.FC = () => (
    <article className="loading">
        <div data-testid="loading" className="loading__content">
            <BeatLoader
                color="#203943"
                size={50}
            />
        </div>
    </article>
);

export default Loading;
