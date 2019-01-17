import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

import instagramLogo from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/instagramLogo.png';

const SearchBarWrapperStyles = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid lightgray;
    margin-top: 1%;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    margin-bottom: 2%;
`

const SearchInputStyles = styled.div`
    margin-top: 1%;
    font-size: 12px;
    width: 30%;
`

const UserIconStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
    margin-top: 1%;
`

const SearchBar = props => {
    return (
        <SearchBarWrapperStyles>
        <LogoWrapper>
        <i class="fab fa-instagram"></i>
        <span>|</span>
        <img className="instagramLogo" src={instagramLogo} alt="instagram" />
        </LogoWrapper>
        <SearchInputStyles>
        <form onSubmit={props.filterNames}>
        <input 
        className="commentForm"
        type="text"
        name="searchInput"
        placeholder="Search"
        value={props.searchInput}
        onChange={props.handleChanges}
        />
        </form>
        </SearchInputStyles>
        <UserIconStyles>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </UserIconStyles>
        </SearchBarWrapperStyles>
    );
}

export default SearchBar;