import React from 'react';

import dummyData from '/Users/Don/Git/React-Insta-Clone/instagram/src/dummy-data.js';
import SearchBar from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar.js';
import PostContainer from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer.js';


class PostsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            searchInput: ''
        }
    }
    componentDidMount() {
        console.log('Component mounted');
        this.setState({ posts: dummyData,
        usernames: dummyData.username });
      }
    
      filterNames = e => {
        console.log(this.state.searchInput)
        e.preventDefault();
        let newArray = []
        //eslint-disable-next-line
        let newPosts = this.state.posts.map(post => {
          if (post.username.includes(this.state.searchInput)){
            newArray.push(post);
          }
        })
        console.log(newArray);
        this.setState({
          posts: newArray
        });
      }

      handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render(){
        return(
            <div className="postsPage">
            <SearchBar 
                searchInput={this.state.searchInput}
                handleChanges={this.handleChanges}
                filterNames={this.filterNames}
            />
            <PostContainer 
                posts={this.state.posts}
                increaseLikes={this.increaseLikes}
                likes={this.state.likes}
            />
            </div>
        );
    }

}

export default PostsPage;