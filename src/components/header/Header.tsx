import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../../assets/icons/search_header.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <header>
            <Link to="/search" tabIndex={0} className={`header__search-icon a11y-btn ${location.pathname === '/' ? 'hidden' : ''}`}><img src={searchIcon} alt="Search" height="60" /></Link>
            <Link to="/" tabIndex={0} className="header__heading a11y-btn"><h1>Weather-App</h1></Link>
            <button type="button" tabIndex={0} className="header__favorite-icon a11y-btn"><img src={favoriteIcon} alt="Favorite" height="60" /></button>
        </header>
    );
};

export default Header;
