import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../assets/icons/search.svg';
import './Search.scss';
import Button from '../button/Button';

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
            <form data-testid="form-submit" onSubmit={(e): void => search(e)}>
                <label htmlFor="search-input">
                    <input data-testid="form-input" id="search-input" type="text" className="search__input" pattern="[A-Za-z ]+" onChange={(e): void => setLocation(e.target.value)} />
                </label>
                <Button type="submit">
                    <img className="search-icon" src={searchIcon} alt="Search" />
                </Button>
            </form>
        </section>
    );
};

export default Search;
