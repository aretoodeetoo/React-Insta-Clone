import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import styled from 'styled-components';

// Styled Components
const CommentUsernameStyles = styled.span`
    font-weight: bold;
    margin-right: .5%;
`

const Comment = props => {
    return (
        <div className="commentBox">
         <CommentUsernameStyles>
            {props.comment.username}
        </CommentUsernameStyles> {''}
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