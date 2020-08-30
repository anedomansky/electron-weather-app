import React from 'react';
import { useHistory } from 'react-router-dom';
import closeIcon from '../../assets/icons/cross.svg';
import Search from '../search/Search';
import './SearchPage.scss';
import Button from '../button/Button';

const SearchPage: React.FC = () => {
    const history = useHistory();
    return (
        <article className="search-page">
            <Button
                testId="close-btn"
                type="button"
                onClick={(): void => history.goBack()}
                ariaLabel="close search"
            >
                <img src={closeIcon} alt="Close" height="60" />
            </Button>
            <div className="search-page__content">
                <Search />
            </div>
        </article>
    );
};

export default SearchPage;
