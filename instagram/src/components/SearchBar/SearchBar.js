import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

import instagramLogo from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/instagramLogo.png';

// Component Styles

//Wraps whole search bar
const SearchBarWrapperStyles = styled.div`
    display: flex;
    justify-content: center;
    width: 63%;
    max-width: 880px;
    z-index: 5;
    border-bottom: 1px solid lightgray;
    margin-bottom: 1%;
    position: fixed;
    background: white;
`

//All logo elements
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    margin-bottom: 2%;
    margin-top: 1%;
`

const CameraIcon = styled.span`
    color: black;
`

const InstagramLogoImage = styled.img`
    width: 50%;
    height: auto;
`

// Search Form and Input
const SearchInputStyles = styled.div`
    margin-top: 2.5%;
    font-size: 12px;
    width: 30%;
`
const SearchBarInput = styled.input`
    background-color: #FAFAFA;
    text-align: center;
    font-size: 14px;
    width: 100%;
`

const UserIconStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
    margin-top: 2.5%;
`

const SearchBar = props => {
    return (
        <SearchBarWrapperStyles>
        <LogoWrapper>
            <CameraIcon>
        <i className="fab fa-instagram"></i></CameraIcon>
        <span>|</span>
        <InstagramLogoImage src={instagramLogo} alt="instagram" />
        </LogoWrapper>
        <SearchInputStyles>
        <form onSubmit={props.filterNames}>
        <SearchBarInput 
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