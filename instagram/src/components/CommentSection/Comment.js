import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="commentBox">
         <span className="commentUsername">
            {props.comment.username}
        </span> {''}
        <span>
            {props.comment.text}
         </span>  
        </div>
    );
}

export default Comment;