import React from 'react';
import './CommentSection.css';
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

export default CommentSection;