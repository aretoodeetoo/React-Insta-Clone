import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
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


    render(){
        return(
            <div className="commentSection">
            {this.state.comments.map((com, idx) => 
                <Comment
                key={idx}
                comment={com} />
            )}
            <CommentInput
            handleChanges={this.handleChanges}
            addNewComment={this.addNewComment}
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