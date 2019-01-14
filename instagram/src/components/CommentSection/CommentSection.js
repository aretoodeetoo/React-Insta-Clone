import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    render(){
        return(
            <div className="commentSection">
            </div>
        );
    }
}

export default CommentSection;