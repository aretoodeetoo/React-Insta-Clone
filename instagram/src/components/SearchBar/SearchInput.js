import React from 'react';
import './SearchBar.css';

const SearchInput = props => {
    return (
        <div className="SearchInputForm">
        <input
        type="text"
        placeholder="Search..."
        />
        </div>
    );
}

export default SearchInput;