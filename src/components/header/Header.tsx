import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../../assets/icons/search_header.svg';
import FavoritesList from '../favorites-list/FavoritesList';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header>
            <Link to="/search" tabIndex={0} className={`header__search-icon a11y-btn ${location.pathname === '/' && 'hidden'}`}><img src={searchIcon} alt="Search" /></Link>
            <Link to="/" tabIndex={0} className="header__heading a11y-btn"><h1>Weather-App</h1></Link>
            <FavoritesList />
        </header>
    );
};

export default Header;
