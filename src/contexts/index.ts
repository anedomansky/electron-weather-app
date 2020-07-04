import React from 'react';
import FavoritesStore from '../stores/FavoritesStore';

const storesContext = React.createContext({
    favoritesStore: new FavoritesStore(),
});

export default storesContext;
