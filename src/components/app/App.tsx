import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '../../routes';
import './App.scss';
import Header from '../header/Header';

const App: React.FC = () => (
    <div className="content" role="application">
        <Header />
        <main role="main">
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </main>
    </div>
);

export default App;
