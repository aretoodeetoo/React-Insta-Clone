import React from 'react';
import './PostContainer.css';

import PostCard from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostCard.js';

const PostContainer = props => {
    return(
      <div className="PostContainer">
      {props.posts.map(post => 
      <PostCard
      key={post.imageUrl}
      post={post} />
      )}
      </div>
    );
}

export default PostContainer;