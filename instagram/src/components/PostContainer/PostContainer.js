import React from 'react';
import './PostContainer.css';
import styled from 'styled-components'; 

import PostCard from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostCard.js';

// Styled Components

const PostContainerWrapper = styled.div`
  margin: 0 auto;
  width: 72%;
`

const PostContainer = props => {
    return(
      <PostContainerWrapper>
      {props.posts.map(post => 
      <PostCard
      key={post.imageUrl}
      post={post}
      increaseLikes={props.increaseLikes}
      likes={props.likes} />
      )}
      </PostContainerWrapper>
    );
}

export default PostContainer;