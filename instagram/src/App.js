import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data.js';
import SearchBar from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar.js';
import PostContainer from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostContainer.js';
import CommentSection from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
