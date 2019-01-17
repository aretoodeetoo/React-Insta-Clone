import React from 'react';
import './PostContainer.css';

// Import PostCard components
import PostCardHeader from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostCardHeader.js';
import CommentSection from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection.js';


const PostCard = props => {
    return (
        <div className="postCard">
        <PostCardHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />

        <div className="mainPost">
        <img alt="User Post" src={props.post.imageUrl}/>
        </div>
        
        <CommentSection 
        comments={props.post.comments}
        likes={props.post.likes}
        />
        </div>
    );
}

export default PostCard;