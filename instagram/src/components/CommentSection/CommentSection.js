import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render(){
        return(
            <div className="commentSection">
            {this.state.comments.map((com, idx) => 
                <Comment
                key={idx}
                comment={com} />
            )}
            <CommentInput />
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