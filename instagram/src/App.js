import React, { Component } from 'react';
import './App.css';

import PostsPage from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostsPage.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      searchInput: ''
    }
  }





  render() {
    return (
      <div className="App">
      <PostsPage />
      </div>
    );
  }
}

export default App;
