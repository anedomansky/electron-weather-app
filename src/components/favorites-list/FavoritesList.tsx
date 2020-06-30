import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IFavorite } from '../../interfaces/IFavorite';
import favoriteIcon from '../../assets/icons/favorite.svg';
import deleteIcon from '../../assets/icons/bin.svg';
import './FavoritesList.scss';

const FavoritesList: React.FC = () => {
    const [favorites, setFavorites] = useState<IFavorite[]>(JSON.parse(window.localStorage.getItem('favorites') || '[]'));

    const removeFavorite = (favoriteLocation: string) => {
        const currentFavorites = [...favorites].filter((favorite) => favorite.location !== favoriteLocation);
        setFavorites(currentFavorites);
        window.localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    };

    return (
        <div className="favorite-dropdown">
            <button type="button" tabIndex={0} className="a11y-btn"><img src={favoriteIcon} alt="Favorite" /></button>
            <ul className="favorite-dropdown__list">
                {favorites.map((favorite) => (
                    <li key={`favorite-${favorite.location}`} className="dropdown-item">
                        <button type="button" tabIndex={0} className="a11y-btn" onClick={() => removeFavorite(favorite.location)} onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? removeFavorite(favorite.location) : null)}>
                            <img src={deleteIcon} alt="Delete" />
                        </button>
                        <Link to={`/result/${favorite.location.toLowerCase()}`}>
                            {favorite.location}
                        </Link>
                    </li>
                ))}
                {/* <li className="dropdown-item">
                    <button type="button" tabIndex={0} className="a11y-btn" onClick={(event) => removeFavorite(event)} onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? removeFavorite(event) : null)}>
                        <img src={deleteIcon} alt="Delete" />
                    </button>
                    <Link to="/result/dortmund">
                        Dortmund
                    </Link>
                </li> */}
            </ul>
        </div>
    );
};

export default FavoritesList;
