import React from 'react';
import styled from 'styled-components';

import dummyData from '/Users/Don/Git/React-Insta-Clone/instagram/src/dummy-data.js';
import SearchBar from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar.js';
import PostContainer from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer.js';

//Styled Components

const SearchBarWrapperMainPage = styled.div`
    border: 1px solid white;
` 

const PostContainerWrapper = styled.div`
    margin-top: 7%;
`


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
        // let newPosts = this.state.posts.map(post => {
        //     if (post.username.includes(this.state.searchInput)) {
        //         return post
        //     }
        // });

        // if(newPosts.length === 0) {
        //     return
        // } else {
        //     this.setState({ posts: newPosts, searchInput: ''})
        // }
        let newArray = []
        // eslint-disable-next-line
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
            <SearchBarWrapperMainPage>
            <SearchBar 
                searchInput={this.state.searchInput}
                handleChanges={this.handleChanges}
                filterNames={this.filterNames}
            />
            </SearchBarWrapperMainPage>
            <PostContainerWrapper>
            <PostContainer 
                posts={this.state.posts}
                increaseLikes={this.increaseLikes}
                likes={this.state.likes}
            />
            </PostContainerWrapper>
            </div>
        );
    }

}

export default PostsPage;