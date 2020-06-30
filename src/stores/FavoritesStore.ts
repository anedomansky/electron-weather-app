import { action, observable, computed, runInAction } from 'mobx';
import { IFavorite } from '../interfaces/IFavorite';

class FavoritesStore {
    @observable
    private favorites: IFavorite[] = [];

    @computed
    get currentFavorites(): IFavorite[] {
        return this.favorites;
    }

    @action('Checks the localStorage and updates the store.')
    getCurrentFavoritesFromLocalStorage(): IFavorite[] {
        console.log('TODO: Implement me');
    }

    @action('Adds new favorites to the localStorage and updates the store.')
    addFavoriteToLocalStorage() {
        console.log('TODO: Implement me');
    }

    @action('Removes a favorite from the localStorage and updates the store.')
    removeFavoriteFromLocalStorage() {
        console.log('TODO: Implement me');
    }
}

export default FavoritesStore;
