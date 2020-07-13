import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from '../../routes';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const App: React.FC = () => (
    <div className="content" role="application">
        <HashRouter>
            <Header />
            <main role="main">
                {renderRoutes(routes)}
            </main>
            <Footer />
        </HashRouter>
    </div>
);

export default App;
