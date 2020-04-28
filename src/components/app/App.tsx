import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import routes from '../../routes';
import './App.scss';
import Header from '../header/Header';

const App: React.FC = () => (
    <div className="content" role="application">
        <Header />
        <main role="main">
            ELECTRON WITH REACT!!!
            {/* {renderRoutes(routes)} */}
        </main>
    </div>
);

export default App;
