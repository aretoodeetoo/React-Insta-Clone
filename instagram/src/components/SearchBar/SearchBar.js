import React from 'react';
import './SearchBar.css';

import SearchInput from './SearchInput';

const SearchBar = props => {
    return (
        <div className="SearchBar">
        <div className="logo">
        <i class="fas fa-camera"></i>
        <span> | Instagram</span>
        </div>
        <div className="SearchInput">
        <SearchInput />
        </div>
        <div className="user-icons">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
        </div>
    );
}

export default SearchBar;