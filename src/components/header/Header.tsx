import React, { useState } from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../../assets/icons/search_header.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import { IFavorite } from '../../interfaces/IFavorite';
import deleteIcon from '../../assets/icons/bin.svg';

// TODO: Add the favorite drop down menu
const Header: React.FC = () => {
    const location = useLocation();
    const [show, setShow] = useState<boolean>(false);
    const favoritesJSONString = window.localStorage.getItem('favorites');
    const favorites: IFavorite[] = favoritesJSONString && JSON.parse(favoritesJSONString);
    return (
        <header>
            <Link to="/search" tabIndex={0} className={`header__search-icon a11y-btn ${location.pathname === '/' ? 'hidden' : ''}`}><img src={searchIcon} alt="Search" height="60" /></Link>
            <Link to="/" tabIndex={0} className="header__heading a11y-btn"><h1>Weather-App</h1></Link>
            <div className="header__favorite-dropdown dropdown">
                <button type="button" tabIndex={0} className="a11y-btn" onClick={() => setShow(!show)}><img src={favoriteIcon} alt="Favorite" height="60" /></button>
                <ul className={`header__favorite-dropdown dropdown-list ${show && 'show'}`}>
                    {favorites && favorites.map((favorite) => (
                        <li key={`favorite-${favorite.location}`} className="dropdown-item">
                            <img src={deleteIcon} alt="Delete" />
                            <Link to={`/result/${location}`}>
                                {favorite.location}
                            </Link>
                        </li>
                    ))}
                    <li className="dropdown-item">
                        <img src={deleteIcon} alt="Delete" />
                        <Link to="/result/dortmund" onClick={() => setShow(!show)}>
                            Dortmund
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
