import React from 'react';
import './CommentSection.css';

const CommentSection = () => {
    return(
        <div className="comments">
        <input 
        type="text"
        placeholder="Add a comment"
        />
        </div>
    );
}

export default CommentSection;