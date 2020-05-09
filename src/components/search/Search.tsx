import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import './Search.scss';

const Search: React.FC = () => (
    <section className="search">
        <form onSubmit={(e): void => e.preventDefault()}>
            <label htmlFor="search-input">
                <input id="search-input" type="text" className="search__input" />
            </label>
            <button type="submit" tabIndex={0} className="search__submit a11y-btn"><img src={searchIcon} alt="Search" height="60" /></button>
        </form>
    </section>
);

export default Search;
