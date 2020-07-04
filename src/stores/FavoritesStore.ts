import { action, observable, computed } from 'mobx';
import { IFavorite } from '../interfaces/IFavorite';

class FavoritesStore {
    @observable
    private favorites: IFavorite[] = [];

    @computed
    get currentFavorites(): IFavorite[] {
        return this.favorites;
    }

    @action('Checks the localStorage and updates the store.')
    updateCurrentFavoritesFromLocalStorage(): void {
        const currentFavorites = JSON.parse(window.localStorage.getItem('favorites') || '[]');
        this.favorites = currentFavorites;
    }

    @action('Adds new favorites to the localStorage and updates the store.')
    addFavoriteToLocalStorage(favoriteLocation: string): void {
        const newFavorite: IFavorite = {
            location: favoriteLocation.replace(favoriteLocation[0], favoriteLocation[0].toUpperCase()),
        };
        window.localStorage.setItem('favorites', JSON.stringify([...this.favorites, newFavorite]));
        this.updateCurrentFavoritesFromLocalStorage();
    }

    @action('Removes a favorite from the localStorage and updates the store.')
    removeFavoriteFromLocalStorage(favoriteLocation: string): void {
        const currentFavorites = [...this.favorites].filter((favorite) => favorite.location !== favoriteLocation);
        window.localStorage.setItem('favorites', JSON.stringify(currentFavorites));
        this.updateCurrentFavoritesFromLocalStorage();
    }
}

export default FavoritesStore;
