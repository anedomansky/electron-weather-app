import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import favoriteIcon from '../../assets/icons/favorite.svg';
import deleteIcon from '../../assets/icons/bin.svg';
import './FavoritesList.scss';
import useStores from '../../hooks/useStores';
import Button from '../button/Button';

const FavoritesList: React.FC = observer(() => {
    const { favoritesStore } = useStores();
    const [show, setShow] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !(ref.current! as any).contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref.current]);

    useEffect(() => {
        favoritesStore.updateCurrentFavoritesFromLocalStorage();
    }, []);

    const removeFavorite = (favoriteLocation: string) => {
        favoritesStore.removeFavoriteFromLocalStorage(favoriteLocation);
    };

    return (
        <div className="favorite-dropdown" ref={ref}>
            <Button testId="menu-btn" type="button" ariaLabel="favorite menu" onClick={() => setShow(!show)}><img className="favorite" src={favoriteIcon} alt="Favorite" /></Button>
            <ul className={`favorite-dropdown__list ${show && 'show'}`}>
                {favoritesStore.currentFavorites.map((favorite) => (
                    <li key={`favorite-${favorite.location}`} className="dropdown-item">
                        <Button
                            ariaLabel="remove favorite"
                            testId="remove-btn"
                            type="button"
                            onClick={() => removeFavorite(favorite.location)}
                            onKeyDown={(event) => (event.key === 'Enter' || event.keyCode === 13 ? removeFavorite(favorite.location) : null)}
                        >
                            <img src={deleteIcon} alt="Delete" />
                        </Button>
                        <Link tabIndex={0} to={`/result/${favorite.location.toLowerCase()}`} onClick={() => setShow(!show)}>
                            {favorite.location}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default FavoritesList;
