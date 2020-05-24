import React from 'react';
import { Link } from 'react-router-dom';
import './NoResult.scss';

const NoResult: React.FC = () => (
    <article className="no-result">
        <div className="no-result__content">
            <h1>
                No results found!
                <br />
                Please try another
                {' '}
                <Link to="/">location</Link>
                .
            </h1>
        </div>
    </article>
);

export default NoResult;
