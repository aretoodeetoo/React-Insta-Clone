import React from 'react';
import styled from 'styled-components';

// Styled Components

const CommentInputStyles = styled.div`
    margin-top: 1%;
`
const InputForm = styled.input`
    width: 100%;
    text-align: left;
    padding-left: 1%;
`

const CommentInput = props => {
    return (
        <CommentInputStyles>
        <form onSubmit={props.addNewComment}>
        <InputForm
        onChange={props.handleChanges}
        value={props.comment}
        type="text"
        name="comment"
        placeholder="Add a comment..."/>
        </form>
         </CommentInputStyles>
    );
}

export default CommentInput;