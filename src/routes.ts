import { RouteConfig } from 'react-router-config';
import LandingPage from './components/landing-page/LandingPage';
import ResultPage from './components/result-page/ResultPage';
import SearchPage from './components/search-page/SearchPage';

const routes: RouteConfig[] = [
    {
        component: LandingPage,
        exact: true,
        path: '/',
    },
    {
        component: ResultPage,
        exact: true,
        path: '/result/:location',
    },
    {
        component: SearchPage,
        exact: true,
        path: '/search',
    },
];

export default routes;
