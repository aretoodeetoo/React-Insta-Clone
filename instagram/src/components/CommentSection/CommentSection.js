import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Comment from './Comment';
import CommentInput from './CommentInput';

// Styled Components

const CommentIcons = styled.div`
    margin-top: 2%;
    margin-bottom: 1%;
`

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
            likes: props.likes,
            isLiked: false
        };
    }

    handleChanges = ev => {
        this.setState({ comment: ev.target.value });
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.comment,
            username: 'helloWorld'
        };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({
            comments,
            comment: '' 
        });
      };

    increaseLikes = () => {
        this.state.isLiked ? this.setState(prevState => ({
            likes: prevState.likes - 1,
            isLiked: !prevState.isLiked
        }) ) : this.setState(prevState => ({
            likes: prevState.likes + 1,
            isLiked: !prevState.isLiked
        }))
    };

    render(){
        return(
            <div>
            <CommentIcons>
            <i 
            onClick={this.increaseLikes}
            className="far fa-heart"></i>
            <i
            className="far fa-comment"></i>
            </CommentIcons> 
            
            <div>
            {this.state.likes} likes
            </div>

            {this.state.comments.map((com, idx) => 
                <Comment
                key={idx}
                comment={com} />
            )}

            <CommentInput
            handleChanges={this.handleChanges}
            addNewComment={this.addNewComment}
            comment={this.state.comment}
             />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})
    )
}

export default CommentSection;