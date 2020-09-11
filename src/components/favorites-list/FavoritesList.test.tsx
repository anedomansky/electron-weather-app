import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import FavoritesList from './FavoritesList';
import FavoritesStore from '../../stores/FavoritesStore';

test('Renders the FavoritesList component', () => {
    const { container } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
});

test('Fires the onClick event', () => {
    const favoritesStore = new FavoritesStore();
    favoritesStore.addFavoriteToLocalStorage('Test');
    const { container, getByTestId } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('remove-btn'));
});

test('Fires the onClick event on menu-btn', () => {
    const favoritesStore = new FavoritesStore();
    favoritesStore.addFavoriteToLocalStorage('Test');
    const { container, getByTestId } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByTestId('menu-btn'));
});

test('Fires the onClick event on Link', () => {
    const favoritesStore = new FavoritesStore();
    favoritesStore.addFavoriteToLocalStorage('Test');
    const { container, getByText } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
    fireEvent.click(getByText('Test'));
});

test('Fires the onKeyDown event', () => {
    const favoritesStore = new FavoritesStore();
    favoritesStore.addFavoriteToLocalStorage('Test');
    const { container, getByTestId } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('remove-btn'), { key: 'Enter', code: 13 });
});

test('Fires the onKeyDown event with wrong key', () => {
    const favoritesStore = new FavoritesStore();
    favoritesStore.addFavoriteToLocalStorage('Test');
    const { container, getByTestId } = render(<HashRouter><FavoritesList /></HashRouter>);
    expect(container).toBeInTheDocument();
    fireEvent.keyDown(getByTestId('remove-btn'), { key: 'Space', code: 32 });
});
