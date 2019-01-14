import React from 'react';
import './PostContainer.css';
import PostCard from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostCard.js';

const PostContainer = props => {
    return(
      <div className="PostContainer">
      {props.posts.map(po => 
      <PostCard
      key={po.imageUrl}
      post={po} />
      )}
      </div>
    );
}

export default PostContainer;