import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../assets/icons/search.svg';
import './Search.scss';

const Search: React.FC = () => {
    const history = useHistory();

    const [location, setLocation] = useState<string>('');

    /**
     * Initiates the search.
     * @param e - form submit event
     */
    const search = (e: FormEvent): void => {
        e.preventDefault();
        if (location === '') return;
        history.push(`/result/${location}`);
    };

    return (
        <section className="search">
            <form onSubmit={(e): void => search(e)}>
                <label htmlFor="search-input">
                    <input id="search-input" type="text" className="search__input" pattern="[A-Za-z]+" onChange={(e): void => setLocation(e.target.value)} />
                </label>
                <button type="submit" tabIndex={0} className="search__submit a11y-btn"><img src={searchIcon} alt="Search" height="60" /></button>
            </form>
        </section>
    );
};

export default Search;
