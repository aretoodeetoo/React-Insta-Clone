import React from 'react';
import './PostContainer.css';
import styled from 'styled-components';

// Styled Components

const PostHeaderStyles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 2%;
    margin-top: 3%;
`

const UsernameStyles = styled.div`
    margin-top: 3%;
    margin-left: 2%;
    font-weight: bold;
`

const ThumbnailImage = styled.img`
    max-height: 62px; 
    max-width: 200px;
    border-radius: 50%;
`

const PostCardHeader = props => {
    return (
        <PostHeaderStyles>

        <ThumbnailImage
        alt="Thumbnail" 
        src={props.thumbnailUrl} />
        
        <UsernameStyles>
        {props.username}</UsernameStyles>
        </PostHeaderStyles>
    );
}

export default PostCardHeader;