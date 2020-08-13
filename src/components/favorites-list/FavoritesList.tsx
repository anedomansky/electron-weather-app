import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import favoriteIcon from '../../assets/icons/favorite.svg';
import deleteIcon from '../../assets/icons/bin.svg';
import './FavoritesList.scss';
import useStores from '../../hooks/useStores';
import Button from '../button/Button';

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
            <Button type="button"><img className="favorite" src={favoriteIcon} alt="Favorite" /></Button>
            <ul className="favorite-dropdown__list">
                {favoritesStore.currentFavorites.map((favorite) => (
                    <li key={`favorite-${favorite.location}`} className="dropdown-item">
                        <Button
                            testId="remove-btn"
                            type="button"
                            onClick={() => removeFavorite(favorite.location)}
                            onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? removeFavorite(favorite.location) : null)}
                        >
                            <img src={deleteIcon} alt="Delete" />
                        </Button>
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
