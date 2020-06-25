import React from 'react';
import { Link } from 'react-router-dom';
import { IFavorite } from '../../interfaces/IFavorite';
import favoriteIcon from '../../assets/icons/favorite.svg';
import deleteIcon from '../../assets/icons/bin.svg';
import './FavoritesList.scss';

const FavoritesList: React.FC = () => {
    const favorites: IFavorite[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

    // TODO: implement me
    const removeFavorite = () => {

    };

    return (
        <div className="favorite-dropdown">
            <button type="button" tabIndex={0} className="a11y-btn"><img src={favoriteIcon} alt="Favorite" /></button>
            <ul className="favorite-dropdown__list">
                {favorites.map((favorite) => (
                    <li key={`favorite-${favorite.location}`} className="dropdown-item">
                        <img src={deleteIcon} alt="Delete" />
                        <Link to={`/result/${favorite.location.toLowerCase()}`}>
                            {favorite.location}
                        </Link>
                    </li>
                ))}
                <li className="dropdown-item">
                    <img src={deleteIcon} alt="Delete" />
                    <Link to="/result/dortmund">
                        Dortmund
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FavoritesList;
