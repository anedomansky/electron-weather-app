import React from 'react';
import './Header.scss';
import searchIcon from '../../assets/icons/search_header.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';

// TODO: move button into its own component
const Header: React.FC = () => (
    <header>
        <button type="button" tabIndex={0} className="header__search-icon a11y-btn"><img src={searchIcon} alt="Search" height="60" /></button>
        <button type="button" tabIndex={0} className="header__heading a11y-btn"><h1>Weather-App</h1></button>
        <button type="button" tabIndex={0} className="header__favorite-icon a11y-btn"><img src={favoriteIcon} alt="Favorite" height="60" /></button>
    </header>
);

export default Header;
