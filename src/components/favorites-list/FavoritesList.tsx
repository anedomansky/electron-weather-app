import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import favoriteIcon from '../../assets/icons/favorite.svg';
import deleteIcon from '../../assets/icons/bin.svg';
import './FavoritesList.scss';
import useStores from '../../hooks/useStores';

const FavoritesList: React.FC = observer(() => {
    const { favoritesStore } = useStores();

    useEffect(() => {
        favoritesStore.updateCurrentFavoritesFromLocalStorage();
    }, []);

    const removeFavorite = (favoriteLocation: string) => {
        favoritesStore.removeFavoriteFromLocalStorage(favoriteLocation);
    };

    return (
        <div className="favorite-dropdown">
            <button type="button" tabIndex={0} className="a11y-btn"><img src={favoriteIcon} alt="Favorite" /></button>
            <ul className="favorite-dropdown__list">
                {favoritesStore.currentFavorites.map((favorite) => (
                    <li key={`favorite-${favorite.location}`} className="dropdown-item">
                        <button
                            type="button"
                            tabIndex={0}
                            className="a11y-btn"
                            onClick={() => removeFavorite(favorite.location)}
                            onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? removeFavorite(favorite.location) : null)}
                        >
                            <img src={deleteIcon} alt="Delete" />
                        </button>
                        <Link to={`/result/${favorite.location.toLowerCase()}`}>
                            {favorite.location}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default FavoritesList;
