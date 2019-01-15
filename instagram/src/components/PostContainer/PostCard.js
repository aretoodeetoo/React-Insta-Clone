import React from 'react';
import './PostContainer.css';
import PostCardHeader from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostCardHeader.js';
import CommentSection from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection.js';

const PostCard = props => {
    return (
        <div className="postCard">
        <div className="postHeader">
        <PostCardHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />
        </div>

        <div className="mainPost">
        <img alt="User Post" src={props.post.imageUrl}/>
        <div className="commentIcons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
        </div>
        <div>
            {props.post.likes} likes
        </div>
        </div>

        <div className="commentSection">
        <CommentSection 
        comments={props.post.comments}
        />
        </div>
        </div>
    );
}

export default PostCard;