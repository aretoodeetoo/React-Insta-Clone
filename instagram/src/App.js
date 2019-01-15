import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data.js';
import SearchBar from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar.js';
import PostContainer from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log('Component mounted');
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
