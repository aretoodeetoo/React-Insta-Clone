import React from 'react';
import PropTypes from 'prop-types';
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

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;