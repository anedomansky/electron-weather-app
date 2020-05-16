import React from 'react';
import { useHistory } from 'react-router-dom';
import closeIcon from '../../assets/icons/cross.svg';
import Search from '../search/Search';
import './SearchPage.scss';

const SearchPage: React.FC = () => {
    const history = useHistory();
    return (
        <article className="search-page">
            <button type="button" tabIndex={0} className="a11y-btn" onClick={(): void => history.goBack()}><img src={closeIcon} alt="Close" height="60" /></button>
            <div className="search-page__content">
                <Search />
            </div>
        </article>
    );
};

export default SearchPage;
