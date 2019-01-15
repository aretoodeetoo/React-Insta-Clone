import React from 'react';
import './SearchBar.css';
import instagramLogo from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/instagramLogo.png';

const SearchBar = props => {
    return (
        <div className="SearchBar">
        <div className="logo">
        <i class="fas fa-camera"></i>
        <span>|</span>
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        </div>
        <div className="SearchInput">
        <form>
        <input 
        className="commentForm"
        type="text"
        placeholder="Search"/>
        </form>
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