import React from 'react';

const CommentInput = props => {
    return (
        <div className="commentInput">
        <form onSubmit={props.addNewComment}>
        <input
        onChange={props.handleChanges}
        value={props.newCommentText}
        type="text"
        name="comment"
        placeholder="Add a comment..."/>
        </form>
         </div>
    );
}

export default CommentInput;