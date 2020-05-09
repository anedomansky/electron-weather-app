import React from 'react';
import { useHistory } from 'react-router-dom';
import closeIcon from '../../assets/icons/cross.svg';
import Search from '../search/Search';

const SearchPage: React.FC = () => {
    const history = useHistory();
    return (
        <article className="search-page">
            <div className="search-page__content">
                <button type="button" tabIndex={0} className="a11y-btn" onClick={(): void => history.goBack()}><img src={closeIcon} alt="Close" height="60" /></button>
                <Search />
            </div>
        </article>
    );
};

export default SearchPage;
