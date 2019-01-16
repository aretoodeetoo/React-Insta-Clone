import React, { Component } from 'react';
import './App.css';

// Import App body
import PostsPage from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostsPage.js';

// Import HOC
// import authenticate from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/Authenticate/Authenticate.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
