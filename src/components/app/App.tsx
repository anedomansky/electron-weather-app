import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '../../routes';
import './App.scss';
import Header from '../header/Header';

const App: React.FC = () => (
    <div className="content" role="application">
        <BrowserRouter>
            <Header />
            <main role="main">
                {renderRoutes(routes)}
            </main>
        </BrowserRouter>
    </div>
);

export default App;
