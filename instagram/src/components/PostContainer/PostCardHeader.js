import React from 'react';
import './PostContainer.css';

const PostCardHeader = props => {
    return (
        <div className="postHeader">
        <div className="thumbnail">
        <img alt="Thumbnail" 
        src={props.thumbnailUrl} />
        </div>
        <div className="user">
        {props.username}</div>
        </div>
    );
}

export default PostCardHeader;