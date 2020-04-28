import React from 'react';
import './Header.scss';
import searchIcon from '../../assets/icons/search_header.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';

const Header: React.FC = () => (
    <header>
        <img className="header__search-icon" src={searchIcon} alt="Search" height="60" />
        <h1>Weather-App</h1>
        <img className="header__favorite-icon" src={favoriteIcon} alt="Favorite" height="60" />
    </header>
);

export default Header;
